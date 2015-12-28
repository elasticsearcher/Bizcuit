var extend = require('util')._extend;

var defaultSettings = {
    elasticsearch: {
        url: 'http://localhost:9200',
        index: 'bizcuit'
    },

    session: {
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
            authorizedUsers = []
        }
    }
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
