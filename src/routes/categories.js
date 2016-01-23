
var esReq = require('./helpers/es-request')('category');

module.exports = function(app) {
    app.post('/api/categories', esReq.insertWithSeoId);
    app.put('/api/categories/:id', esReq.upsert);
    app.get('/api/categories', esReq.get);
    app.get('/api/categories/:id', esReq.get);
};
