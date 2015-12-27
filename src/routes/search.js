
var settings = require('../etc/settings'),
    esClient = require('../es/es-client')(settings.elasticsearch);

function search(req, res) {
    esClient.searchIndex(req.body, res);
}

module.exports = function(app) {
    app.post('/api/search', search);
};
