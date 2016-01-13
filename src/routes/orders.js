
var esReq = require('./helpers/es-request')('order');

module.exports = function(app) {
    app.post('/api/orders', esReq.upsert);
    app.put('/api/orders/:id', esReq.upsert);
    app.get('/api/orders', esReq.get);
    app.get('/api/orders/:id', esReq.get);
};
