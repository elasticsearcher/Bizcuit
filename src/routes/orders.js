
var settings = require('../etc/settings'),
    esClient = require('../es/es-client')(settings.elasticsearch);

function upsert(req, res) {
    var data = req.body;

    // FIXME: why does ExtJS submit an ID for new records?
    // Need to manually remove it right now, because Elasticsearch,
    // will automatically assign a unique ID (within a given mapping type).
    var id = data.id;
    delete data.id;

    if(id == 'new') {
        esClient.postDocument('order', data, res);
    } else {
        esClient.updateDocument('order', id, data, res);
    }
}

function get(req, res) {
    esClient.searchDocuments('order', res);
}

function getById(req, res) {
    var id = req.params.id;
    esClient.getDocumentById('order', id, res);
}

module.exports = function(app) {
    app.post('/api/orders', upsert);
    app.put('/api/orders/:id', upsert);
    app.get('/api/orders', get);
    app.get('/api/orders/:id', getById);
};
