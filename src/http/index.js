var restler = require('restler');

function addPromiseCallbacks(restlerReq, resolve, reject) {

    function handleRestlerResponse(result, response, promiseFn) {
        var result = {
            statusCode: response.statusCode,
            content: result
        };
        promiseFn(result);
    }

    restlerReq.on('success', function handleSuccess(result, response) {
        handleRestlerResponse(result, response, resolve);
    }).on('fail', function handleFailure(result, response) {
        handleRestlerResponse(result, response, reject);
    });
}

function request(method, url, data) {
    method = method.toUpperCase();
    var req = null;

    switch (method) {
        case 'GET':
            if (data) {
                if (typeof (data) === 'object') {
                    req = restler.json(url, data);
                } else {
                    req = restler.get(url, { data: data });
                }
            } else {
                req = restler.get(url);
            }
            break;
        case 'POST':
            if (typeof (data) === 'object') {
                req = restler.postJson(url, data);
            } else {
                req = restler.post(url, { data: data });
            }
            break;
        case 'PUT':
            if (typeof (data) === 'object') {
                req = restler.putJson(url, data);
            } else {
                req = restler.put(url, { data: data });
            }
            break;
        case 'DELETE':
            req = restler.del(url);
            break;
        default:
            throw { error: 'Unknown method: ' + method }
    }

    return new Promise(function (resolve, reject) {
        addPromiseCallbacks(req, resolve, reject);
    });
}

module.exports = {
    request: request
};