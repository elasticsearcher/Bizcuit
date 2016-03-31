
var esReq = require('./helpers/es-request')();

module.exports = function(app, authenticate) {
    app.get('/api/search', authenticate, function (req, res) {
        esReq.searchGlobal(req.session.locale, req.query.query, res);
    });
};
