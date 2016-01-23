
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

function pageTitle(locals, entityName) {
	return locals.title + ' | ' + locals.l20n.values[entityName];
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
		var categoriesPromise = categories.get(req),
			servicesPromise = services.get(req);

		Promise.all([categoriesPromise, servicesPromise]).then(function(results) {

			res.render('home', {
				categories: mapEsHits(results[0]),
		    	services: mapEsHits(results[1]),
		    	pageTitle: pageTitle(res.locals, 'navHome')
		    });
		});
	});

	app.get('/services', function(req, res) {
		var categoryId = req.params.categoryId,
			categoriesPromise = categories.search(),
			servicesPromise = services.search();

		
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

	app.get('/services/:categoryId', function(req, res, next) {
		var categoryId = req.params.categoryId,
			categoryPromise = categories.getById(categoryId),
			servicesPromise = services.search({
				query: {
					term: {
						category_id: categoryId
					}
				}
			});

		
		Promise.all([categoryPromise, servicesPromise]).then(function(results) {
			res.render('services-category', {
				category: mapEsHit(results[0]),
				services: mapEsHits(results[1]),
		    	pageTitle: pageTitle(res.locals, 'navServices')
			});
		}).catch(function(failures) {
			console.log(failures);
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