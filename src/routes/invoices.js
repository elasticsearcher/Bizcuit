
var esReq = require('./helpers/es-request')('invoice');

module.exports = function(app, authenticate) {
    app.post('/api/invoices', authenticate, esReq.upsert);
    app.put('/api/invoices/:id', authenticate, esReq.upsert);
    app.get('/api/invoices', authenticate, esReq.get);
    app.get('/api/invoices/:id', authenticate, esReq.get);
};
