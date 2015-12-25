
var settings = require('../etc/settings'),
    esClient = require('../es/es-client')(settings.elasticsearch);

function postClients(req, res) {
    var data = req.body;

    // FIXME: why does ExtJS submit an ID for new records?
    // Need to manually remove it right now, because Elasticsearch,
    // will automatically assign a unique ID (within a given mapping type).
    if('id' in data) {
        delete data.id;
    }

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

    esClient.postDocument('client', data, res);
}

module.exports = function(app) {
    app.post('/api/clients', postClients);
};
