
var settings = require('../etc/settings'),
    esReq = require('./helpers/es-request')('client');

function upsertClient(req, res) {
    var data = req.body;

    // Process flat address fields
    addressFields = {};
    for(var key in data) {
        if(key.startsWith('address')) {
            addressFields[key] = key.substring(key.indexOf('_') + 1);
        }
    }

    // Create an actual object to contain the address fields
    data.address = {};
    address = data.address;
    for(var key in addressFields) {
        address[addressFields[key]] = data[key];
        delete data[key];
    }

    esReq.upsert(req, res);
}

module.exports = function(app, authenticate) {
    app.post('/api/clients', authenticate, upsertClient);
    app.put('/api/clients/:id', authenticate, upsertClient);
    app.get('/api/clients', authenticate, esReq.get);
    app.get('/api/clients/:id', authenticate, esReq.get);
};
