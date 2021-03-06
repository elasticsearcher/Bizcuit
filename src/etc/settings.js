var extend = require('util')._extend;

var defaultSettings = {

    template: {
        brandName: 'Bizcuit Store'
    },

    elasticsearch: {
        url: 'http://localhost:9200',
        index: 'bizcuit'
    },

    session: {
        cookieKey: 'bizcuit.sid',
        cookieSecret: '',
        maxAge: 60000
    },

    https: {
    	enabled: false,
    	keyPath: '',
    	certPath: ''
    },

    auth: {
        enabled: false,
        google: {
            callbackURL: 'https://localhost/api/auth/google/callback',
            clientID: '',
            clientSercret: '',
            authorizedUsers: []
        }
    },

    // The first locale is used as the default
    locales: [
        'en-CA',
        'fr-CA'
    ]
},
settings = defaultSettings;

var overrides;
try {
	overrides = require('./overrides');
} catch(e) {}

if(overrides) {
	settings = extend(defaultSettings, overrides);
}

module.exports = settings;
