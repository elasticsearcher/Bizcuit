
var esReq = require('./helpers/es-request')();

module.exports = function(app) {
    app.get('/api/search', function (req, res) {
        esReq.searchGlobal(req.session.locale, req.query.query, res);
    });
};
