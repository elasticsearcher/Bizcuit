
var esReq = require('./helpers/es-request')();

module.exports = function(app) {
    app.post('/api/search', function (req, res) {
        esReq.searchGlobal(req.session.locale, req.body, res);
    });
};
