
var esReq = require('./helpers/es-request')('service');


module.exports = function(app) {
    app.post('/api/services', esReq.insertWithSeoId);
    app.put('/api/services/:id', esReq.upsert);
    app.get('/api/services', esReq.get);
    app.get('/api/services/:id', esReq.get);
};
