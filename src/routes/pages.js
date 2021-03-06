
var settings = require('../etc/settings'),
	categories = require('./helpers/es-request')('category'),
	services = require('./helpers/es-request')('service'),
    mail = require('../mail')(settings.mail, 'gmail'),
    util = require('util');

function mapEsHitsByKey(result, key) {
	var obj = {};
	result.hits.hits.forEach(function(hit) {
		hit = mapEsHit(hit);
		var val = hit[key];

		if(obj[val] === undefined) {
			obj[val] = [];
		}
		
		obj[val].push(hit);
	})
	return obj;
}

function mapEsHits(result) {
	return result.hits.hits.map(mapEsHit);
}

function mapEsHit(hit) {
	hit._source.id = hit._id;
	return hit._source;
}

function pageTitle(locals, entityName, extra) {
    var parts = [locals.title, locals.l20n.values[entityName]];
    
    if(extra) {
        parts.push(extra);
    }
    
	return parts.join(' | ');
}

module.exports = function(app) {
	// Define the template variables that should be available
	// to all views
	app.use(function(req, res, next){
	    var locals = res.locals;

	    locals.req = req;
	    locals.year = new Date().getFullYear();

	    var brandName = settings.template.brandName;
	    locals.brandName = locals.title = brandName;

	    var categoriesPromise = categories.get(req);
	    categoriesPromise.then(function(result) {
	    	locals.serviceCategories = mapEsHits(result);
	    	next();
	    })
	});

	app.get('/:locale', function(req, res, next) {
	    var locale = req.params.locale;

	    // If the provided locale param isn't an actual locale, we skip this route,
	    // because otherwise any previously unhandled path will simply map to it.
	    // Instead, unhandled routes should fall through to the 404 page as usual.
	    // This is a special case that needs to be handled because everything
	    // unhandled inherently ends up here.
	    if (settings.locales.indexOf(locale) === -1) {
	        return next();
	    }

        var categoriesPromise = categories.search(locale),
			servicesPromise = services.search(locale);
		
		Promise.all([categoriesPromise, servicesPromise]).then(function(results) {
			res.render('home', {
				categories: mapEsHits(results[0]),
				services: mapEsHitsByKey(results[1], 'category_id'),
		    	pageTitle: pageTitle(res.locals, 'navHome')
			});
		}).catch(function(failures) {
			console.log(failures);
			next();
		});
	});

	app.get('/:locale/services', function (req, res, next) {
	    var categoryId = req.params.categoryId,
            locale = req.session.locale,
			categoriesPromise = categories.search(locale),
			servicesPromise = services.search(locale);
		
		Promise.all([categoriesPromise, servicesPromise]).then(function(results) {
			res.render('services', {
				categories: mapEsHits(results[0]),
				services: mapEsHitsByKey(results[1], 'category_id'),
		    	pageTitle: pageTitle(res.locals, 'navServices')
			});
		}).catch(function(failures) {
			console.log(failures);
			next();
		});
	});

	app.get('/:locale/services/:categorySeoId', function (req, res, next) {
	    var params = req.params,
            categorySeoId = params.categorySeoId,
            locale = params.locale,
			categoryPromise = categories.searchExact(locale, { 'seo_id': categorySeoId }),
			category = null;

		categoryPromise.then(mapEsHits).then(function(results) {
			category = results[0];
			return services.searchExact(locale, { 'category_id': category.id });
		}).then(function(results) {
			res.render('services-category', {
				category: category,
				services: mapEsHits(results),
		    	pageTitle: pageTitle(res.locals, 'navServices', category.name)
		    });
		}).catch(function(error) {
		    console.log(error, error.stack);
			next();
		});
	});
    
    app.get('/:locale/services/:categorySeoId/:serviceSeoId', function(req, res, next) {
        var params = req.params,
            locale = params.locale,
            categorySeoId = params.categorySeoId,
            serviceSeoId = params.serviceSeoId,
            categoryPromise = categories.searchExact(locale, { 'seo_id': categorySeoId }),
            servicePromise = null,
            category = null,
            service = null;
            
            categoryPromise.then(mapEsHits).then(function(results) {
                category = results[0];
                return services.searchExact(locale, {
                    category_id: category.id,
                    seo_id: serviceSeoId
                });
            }).then(mapEsHits).then(function(results) {
                service = results[0];
                res.render(service.html_template_name, {
                    category: category,
                    service: service,
                    pageTitle: pageTitle(res.locals, 'navServices', service.name)
                });
            }).catch(function(error) {
                console.log(error, error.stack);
                next();
            });
    });

	app.get('/:locale/faq', function (req, res) {
	    res.render('faq', {
	    	pageTitle: pageTitle(res.locals, 'navFaq')
	    });
	});

	app.get('/:locale/contact', function (req, res) {
		services.get(req).then(function(result) {
			res.render('contact', {
		    	services: mapEsHits(result),
		    	pageTitle: pageTitle(res.locals, 'navContact')
		    });
		});
	});

	app.post('/:locale/contact', function (req, res) {
		console.log('Contact form submitted with', req.body);
        var body = req.body,
            text = util.format('From: %s %s\n'
                             + 'Email: %s\n'
                             + 'Message: %s',
                             body.firstName, body.lastName, body.email, body.message);
        
        var mailOptions = {
            from: settings.mail.gmail.user,
            to: settings.mail.to,
            subject: body.subject,
            text: text
        };
         
        mail.sendMail(mailOptions, function(error, info) {
            if(error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
        
        res.redirect(303, '/' + req.params.locale + '/thank-you');
	});
    
    app.get('/:locale/thank-you', function (req, res) {
        res.render('thank-you', {
	    	pageTitle: pageTitle(res.locals, 'navContact')
	    });
    });

	app.get('/:locale/about', function (req, res) {
	    res.render('about', {
	    	pageTitle: pageTitle(res.locals, 'navAbout')
	    });
	});
};