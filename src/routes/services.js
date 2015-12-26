
var settings = require('../etc/settings'),
    esClient = require('../es/es-client')(settings.elasticsearch);

function upsertService(req, res) {
    var data = req.body;

    // FIXME: why does ExtJS submit an ID for new records?
    // Need to manually remove it right now, because Elasticsearch,
    // will automatically assign a unique ID (within a given mapping type).
    var id = data.id;
    delete data.id;

    if(id == 'new') {
        esClient.postDocument('service', data, res);
    } else {
        esClient.updateDocument('service', id, data, res);
    }
}

function getServices(req, res) {
    esClient.searchDocuments('service', res);
}

function getServiceById(req, res) {
    var id = req.params.id;
    esClient.getDocumentById('service', id, res);
}

module.exports = function(app) {
    app.post('/api/services', upsertService);
    app.put('/api/services/:id', upsertService);
    app.get('/api/services', getServices);
    app.get('/api/services/:id', getServiceById);
};
