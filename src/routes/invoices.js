
var esReq = require('./helpers/es-request')('invoice');

module.exports = function(app) {
    app.post('/api/invoices', esReq.upsert);
    app.put('/api/invoices/:id', esReq.upsert);
    app.get('/api/invoices', esReq.get);
    app.get('/api/invoices/:id', esReq.get);
};
