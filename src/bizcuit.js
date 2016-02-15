var express = require('express'),
    app = express(),
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
    handlebars = require('express-handlebars')
        .create({
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: {
              navClass: function(navPath) {
                  // If we are home, return active right away 
                  if(navPath === '/') {
                      if(this.req.path === '/' + this.locale) {
                          return 'active';
                      }
                      return '';
                  }
                  
                  var localizedPath = '/' + this.locale + navPath;
                  return this.req.path == localizedPath ? 'active' : '';
              }
          }
        }),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    settings = require('./etc/settings');

// Disable the x-powered-by header to hide the implementation details
app.disable('x-powered-by');

app.use(require('cookie-parser')(settings.session.cookieSecret));

app.use(require('express-session')({
    key: 'bizcuit.sid',
    secret: settings.session.cookieSecret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        secure: settings.https.enabled,
        httpOnly: true,
        signed: true,
        maxAge: settings.session.maxAge
    }
}));

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up l20n
require('./l20n-middleware')(app);

var users = {};

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, users[id]);
});

var passOptions = {
    successRedirect: '/bizcuit',
    failureRedirect: '/bizcuit/login'
};

// Routes
var admin = require('./routes/admin')(app),
    clients = require('./routes/clients')(app),
    services = require('./routes/services')(app),
    invoices = require('./routes/invoices')(app),
    categories = require('./routes/categories')(app),
    search = require('./routes/search')(app);

// Set handlebars as the view engine
app.engine('hbs', handlebars.engine);
app.engine('html', handlebars.engine);
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

if(settings.auth.enabled) {
    var auth = {
        init: function() {
            var google = settings.auth.google;

            passport.use(new GoogleStrategy({
                callbackURL: google.callbackUrl,
                clientID: google.clientId,
                clientSecret: google.clientSecret
            },
            function(accessToken, refreshToken, profile, done) {
                var authId = 'google:' + profile.id;
                if(authId in users) {
                    return done(null, users[authId]);
                } else {
                    users[authId] = { id: authId, name: profile.displayName, created: Date.now() };
                    console.log('User logged in:', authId, profile.displayName, Date.now());
                    return done(null, users[authId]);
                }
            }));
            app.use(passport.initialize());
            app.use(passport.session());
        },

        registerRoutes: function() {
            app.get('/api/auth/google', function(req, res, next) {
                passport.authenticate('google', {
    //                callbackURL: '/api/auth/google/callback?redirect=' + encodeURIComponent(req.query.redirect),
                    scope: [ 'https://www.googleapis.com/auth/userinfo.profile' ]
                })(req, res, next);
            });
            
            app.get('/api/auth/google/callback',
                    passport.authenticate('google', { failureRedirect: passOptions.failureRedirect }),
                    function(req, res) {
                        res.redirect(303, req.query.redirect || passOptions.successRedirect);
                    }
            );
        }
    };

    auth.init();
    auth.registerRoutes();

    app.get('/bizcuit/login', function(req, res) {
        res.render('bizcuit/login', {
            layout: null
        });
    });

    app.use(function(req, res, next) {
        if(!req.session.passport || !req.session.passport.user) {
            return res.redirect(303, '/bizcuit/login');
        }

        if(settings.auth.google.authorizedUsers.indexOf(req.session.passport.user) != -1) {
            next();
        } else {
            console.log(req.session.passport.user, 'is not authorized.');
            return res.redirect(303, '/bizcuit/login?reason=not_authorized');
        }
    });
}

var env = app.get('env'),
    buildDir;

switch(env) {
    case 'development':
        buildDir = __dirname + '/ui';
        app.use(require('morgan')('dev'));
        console.log('DEV MODE');
        break;
    case 'production':
        buildDir = __dirname + '/ui/build/' + env + '/Bizcuit';
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
        console.log('PROD MODE');
        break;
}

app.get('/:locale/bizcuit', function(req, res) {
    // Bizcuit the "app" is mounted at /bizcuit and not at the root,
    // because the root is reserved for a client-facing site, whose
    // content is managed by Bizcuit
    res.type('text/html');
    res.status(200);
    res.sendFile(buildDir + '/app.html');
});

// Set up pages
var pages = require('./routes/pages')(app);

app.use('/:locale', express.static(buildDir));

// 404 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
});


// 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 Internal Error');
});


if(settings.https.enabled) {
    app.set('port', 443);

    var options = {
            key: fs.readFileSync(settings.https.keyPath),
            cert: fs.readFileSync(settings.https.certPath)
        };

    var secureServer = https.createServer(options, app).listen(app.get('port'), function() {
        console.log('App running on port', app.get('port'));
    });

    // Redirect all HTTP requests to HTTPS
    var server = http.createServer(function(req, res) {
        res.writeHead(301, { 'Location': 'https://' + req.headers['host'] + req.url });
        res.end();
    }).listen(80);
} else {
    app.set('port', (process.env.PORT || 5000));

    var server = app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
    });
}
