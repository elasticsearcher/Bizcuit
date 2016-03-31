
var esReq = require('./helpers/es-request')('service');


module.exports = function(app, authenticate) {
    app.post('/api/services', authenticate, esReq.upsert);
    app.put('/api/services/:id', authenticate, esReq.upsert);
    app.get('/api/services', authenticate, esReq.get);
    app.get('/api/services/:id', authenticate, esReq.get);
};
