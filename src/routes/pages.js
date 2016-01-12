
var settings = require('../etc/settings');

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
	    res.render('home', {
	    	services: [{
	    		name: 'Service 1'
	    	}, {
	    		name: 'Service 2'
	    	}, {
	    		name: 'Service 3'
	    	}, {
	    		name: 'Service 4'
	    	}],

	    	products: [{
	    		name: 'Product 1'
	    	}, {
	    		name: 'Product 2'
	    	}, {
	    		name: 'Product 3'
	    	}]
	    });
	});

	app.get('/services', function(req, res) {
	    res.render('services');
	});

	app.get('/faq', function(req, res) {
	    res.render('faq');
	});

	app.get('/contact', function(req, res) {
	    res.render('contact');
	});

	app.post('/contact', function(req, res) {
		console.log('Contact form submitted with', req.body);
	    res.render('contact');
	});

	app.get('/about', function(req, res) {
	    res.render('about');
	});
};