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

    //app.get('/en', function(req, res) {
    //    setLocale(req, res, 'en-CA').then(function (result) {
    //        res.redirect(req.get('referrer') || '/');
    //    });
    //});

    //app.get('/fr', function(req, res) {
    //    setLocale(req, res, 'fr-CA').then(function (result) {
    //        res.redirect(req.get('referrer') || '/');
    //    });
    //});

    app.get('/', function (req, res, next) {
        res.redirect('/' + settings.locales[0]);
    });

    app.get('/:locale*', function (req, res, next) {
        var locale = req.params.locale;

        // If the locale param is not a valid locale, then set it to
        // undefined, so that the default locale is selected
        if (settings.locales.indexOf(locale) === -1) {
            locale = undefined;
        }

        setLocale(req, res, locale).then(function () {
            next();
        });
    });

    //return function(req, res, next) {
    //    var session = req.session,
    //        promise = null;

    //    // If the language has already been set, we're done
    //    if(session.locale) {
    //        promise = Promise.resolve();
    //    // Otherwise, set the default language
    //    } else {
    //        promise = setLocale(req, res)
    //    }

    //    promise.then(function() {
    //        res.locals.l20n = session.l20n;
    //        next();
    //    })
    //}
 }