var l20n = require('l20n'),
    l20nEnv = new l20n.Env(l20n.fetchResource);

function setLocale(req, res, locale) {
    var session = req.session,
        langs = [];

    if (locale) {
        langs.push({ code: locale })
    } else {
        locale = 'en-CA'
    }

    // Fallback language
    langs.push({ code: 'en-CA' });

    var ctx = l20nEnv.createContext(langs, [__dirname + '/locales/{locale}.l20n']);
    
    session.l20n = {
        ctx: ctx,
        values: {},
        is: {
            // TODO: these flags should be created automatically for all locales in the settings
            enCA: locale === 'en-CA',
            frCA: locale === 'fr-CA'
        }
    };

    session.locale = locale;

    var entitiesToTranslate = [
        'navHome',
        'navServices',
        'navContact',
        'navFaq',
        'navAbout',
        'allRightsReserved'
    ];

    // Translate values common to all pages
    return ctx.formatValues.apply(ctx, entitiesToTranslate).then(
        function(result) {
            var values = session.l20n.values;
            result.forEach(function(v, i) {
                values[entitiesToTranslate[i]] = v;
            });
        });
}

 module.exports = function(app) {

    app.get('/en', function(req, res) {
        setLocale(req, res, 'en-CA').then(function (result) {
            res.redirect(req.get('referrer') || '/');
        });
    });

    app.get('/fr', function(req, res) {
        setLocale(req, res, 'fr-CA').then(function (result) {
            res.redirect(req.get('referrer') || '/');
        });
    });

    return function(req, res, next) {
        var session = req.session,
            promise = null;

        // If the language has already been set, we're done
        if(session.locale) {
            promise = Promise.resolve();
        // Otherwise, set the default language
        } else {
            promise = setLocale(req, res)
        }

        promise.then(function() {
            res.locals.l20n = session.l20n;
            next();
        })
    }
 }