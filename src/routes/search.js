
var esReq = require('./helpers/es-request')();

module.exports = function(app) {
    app.post('/api/search', esReq.search);
};
