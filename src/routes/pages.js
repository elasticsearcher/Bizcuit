
var settings = require('../etc/settings'),
	categories = require('./helpers/es-request')('category'),
	services = require('./helpers/es-request')('service');

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
	return [locals.title, locals.l20n.values[entityName], extra].join(' | ');
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

	app.get('/', function(req, res) {
	    var categoryId = req.params.categoryId,
            locale = req.session.locale,
			categoriesPromise = categories.search(locale),
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

	app.get('/services', function(req, res) {
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

	app.get('/services/:categorySeoId', function(req, res, next) {
	    var categorySeoId = req.params.categorySeoId,
            locale = req.session.locale,
			categoryPromise = categories.searchExact(locale, 'seo_id', categorySeoId),
			category = null;

		categoryPromise.then(mapEsHits).then(function(results) {
			category = results[0];
			console.log(category);
			return services.searchExact(locale, 'category_id', category.id);
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

	app.get('/faq', function(req, res) {
	    res.render('faq', {
	    	pageTitle: pageTitle(res.locals, 'navFaq')
	    });
	});

	app.get('/contact', function(req, res) {
		services.get(req).then(function(result) {
			res.render('contact', {
		    	services: mapEsHits(result),
		    	pageTitle: pageTitle(res.locals, 'navContact')
		    });
		});
	});

	app.post('/contact', function(req, res) {
		console.log('Contact form submitted with', req.body);
	    res.render('contact', {
	    	pageTitle: pageTitle(res.locals, 'navContact')
	    });
	});

	app.get('/about', function(req, res) {
	    res.render('about', {
	    	pageTitle: pageTitle(res.locals, 'navAbout')
	    });
	});
};