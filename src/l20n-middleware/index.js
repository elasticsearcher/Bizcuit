var l20n = require('l20n'),
    l20nEnv = new l20n.Env(l20n.fetchResource),
    settings = require('../etc/settings');

function setLocale(req, res, locale) {
    var session = req.session,
        langs = [];

    // If no locale is provided, use the default locale
    if (!locale) {
        locale = settings.locales[0];
    }

    var promise = null;
    // If the locale has already been set and hasn't changed, simply set the localization
    // data on the locals object and return
    if (session.locale && session.locale === locale) {
        promise = Promise.resolve();
    } else {
        langs.push({ code: locale });

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
        promise = ctx.formatValues.apply(ctx, entitiesToTranslate).then(
            function (result) {
                var values = session.l20n.values;
                result.forEach(function (v, i) {
                    values[entitiesToTranslate[i]] = v;
                });
            });
    }

    res.locals.l20n = session.l20n;
    res.locals.locale = locale;

    return promise;
}

 module.exports = function(app) {
     app.get('/', function (req, res, next) {
         // TODO: this needs a test
        var locale = req.session.locale || settings.locales[0];
        res.redirect('/' + locale);
    });

     // TODO: need a test to check that the locale gets correctly set
     // no matter which method is used (POST/GET/PUT/DELETE)
    app.all('/:locale*', function (req, res, next) {
        var locale = req.params.locale;
        // If the locale param is not a valid locale, check the query string
        var locales = settings.locales;
        if (locales.indexOf(locale) === -1) {
            // If the locale isn't specified in the query string, fall through
            // TODO: this needs a test
            locale = req.query.locale;
            if (locales.indexOf(locale) === -1) {
                return next();
            }
        }

        setLocale(req, res, locale).then(function () {
            next();
        });
    });
 }