
var settings = require('../etc/settings'),
    client = require('../es/es-client')(settings.elasticsearch);

function postReset(req, res) {
    client.reset();
    res.status(200).json({ success: true });
}

module.exports = function(app) {
    app.post('/api/admin/reset', postReset);
};
