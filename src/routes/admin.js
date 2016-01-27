
var settings = require('../etc/settings'),
    client = require('../es/es-client')(settings.elasticsearch);

function postReset(req, res) {
    client.reset().then(function() {
    	res.status(200).json({ success: true });
    }).catch(function(error) {
    	res.status(500).json({ error: error });
    });
    
}

module.exports = function(app) {
    app.post('/api/admin/reset', postReset);
};
