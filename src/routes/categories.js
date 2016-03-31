
var esReq = require('./helpers/es-request')('category');

module.exports = function(app, authenticate) {
    app.post('/api/categories', authenticate, esReq.upsert);
    app.put('/api/categories/:id', authenticate, esReq.upsert);
    app.get('/api/categories', authenticate, esReq.get);
    app.get('/api/categories/:id', authenticate, esReq.get);
};
