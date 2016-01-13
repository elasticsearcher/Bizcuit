
var settings = require('../etc/settings'),
	esClient = require('../es/es-client')(settings.elasticsearch),
	services = require('./helpers/es-request')('service');

function mapEsResult(result) {
	return result.hits.hits.map(function(hit) {
		hit._source.id = hit._id;
		return hit._source;
	});
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

	    next();
	});

	app.get('/', function(req, res) {
		services.get(req).then(function(result) {
			res.render('home', {
		    	services: mapEsResult(result)
		    });
		});
	});

	app.get('/services', function(req, res) {
	    res.render('services');
	});

	app.get('/faq', function(req, res) {
	    res.render('faq');
	});

	app.get('/contact', function(req, res) {
		services.get(req).then(function(result) {
			res.render('contact', {
		    	services: mapEsResult(result)
		    });
		});
	});

	app.post('/contact', function(req, res) {
		console.log('Contact form submitted with', req.body);
	    res.render('contact');
	});

	app.get('/about', function(req, res) {
	    res.render('about');
	});
};