var l20n = require('l20n'),
    l20nEnv = new l20n.Env(l20n.fetchResource);

function setLang(req, res, lang) {
    var session = req.session,
        langs = [];

    if(lang) {
        langs.push({ code: lang })
    } else {
        lang = 'en-CA'
    }

    // Fallback language
    langs.push({ code: 'en-CA' });

    var ctx = l20nEnv.createContext(langs, [__dirname + '/locales/{locale}.l20n']);
    
    session.l20n = {
        ctx: ctx,
        values: {},
        is: {
            enCA: lang === 'en-CA',
            frCA: lang === 'fr-CA'
        }
    };

    session.lang = lang;

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
            console.log(session.l20n);
        });
}

 module.exports = function(app) {

    app.get('/en', function(req, res) {
        setLang(req, res, 'en-CA').then(function(result) {
            res.redirect(res.get('referrer') || '/');
        });
    });

    app.get('/fr', function(req, res) {
        setLang(req, res, 'fr-CA').then(function(result) {
            res.redirect(res.get('referrer') || '/');
        });
    });

    return function(req, res, next) {
        var session = req.session,
            promise = null;

        // If the language has already been set, we're done
        if(session.lang) {
            promise = Promise.resolve();
        // Otherwise, set the default language
        } else {
            promise = setLang(req, res)
        }

        promise.then(function() {
            res.locals.l20n = session.l20n;
            next();
        })
    }
 }