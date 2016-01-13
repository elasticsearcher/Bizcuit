
var settings = require('../etc/settings'),
    esClient = require('../es/es-client')(settings.elasticsearch),
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

module.exports = function(app) {
    app.post('/api/clients', upsertClient);
    app.put('/api/clients/:id', upsertClient);
    app.get('/api/clients', esReq.get);
    app.get('/api/clients/:id', esReq.get);
};
