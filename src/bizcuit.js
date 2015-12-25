var express = require('express'),
    app = express(),
    handlebars = require('express-handlebars')
        .create({
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: {}
        });

// Logging
app.use(require('morgan')('dev'));

// body-parser
app.use(require('body-parser')());

// Routes
var admin = require('./routes/admin')(app),
    clients = require('./routes/clients')(app);

// Disable the x-powered-by header to hide the implementation details
app.disable('x-powered-by');

// Set handlebars as the view engine
app.engine('hbs', handlebars.engine);
app.engine('html', handlebars.engine);
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/bizcuit', function(req, res) {
    // Bizcuit the "app" is mounted at /bizcuit and not at the root,
    // because the root is reserved for a client-facing site, whose
    // content is managed by Bizcuit
    res.type('text/html');
    res.status(200);
    res.sendFile(__dirname + '/ui/index.html');
});

// TODO: Once the ExtJS build process is automated, the 'ui/' directory should
// only be served in development, and an actual build of the ui should be
// generated under 'public/' and served from there in production
app.use(express.static(__dirname + '/ui'));

// All Bizcuit API resources are mounted at /api/*
app.get('/api/test', function(req, res) {
    res.status(200);
    res.type('text/plain');
    res.send('API :D');
});

// 404 page
app.use(function(req, res) {
    res.status(404);
    //res.render('404');
    res.send('404 Not Found');
});

// 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    //res.render('500');
    res.send('500 Internal Error');
});

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
