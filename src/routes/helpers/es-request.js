var settings = require('../../etc/settings'),
    esClient = require('../../es/es-client')(settings.elasticsearch);

module.exports = function(mapping) {
	// Empty mapping means perform the operations on all mappings
	mapping = mapping || '';

	function addPromiseHandlers(promise, res) {
		return promise.then(function(result) {
			var restlerRes = result[1],
				result = result[0];
			// result.success = true;
	        res.status(restlerRes.statusCode).json(result);
	    }).catch(function(result) {
	        res.status(restlerRes.statusCode).json({ error: result });
	    });
	}

	return {
		get: function(req, res) {
			var promise = null,
				id = req.params && req.params.id;
			
			// If an ID was provided as a parameter, then get the document from
			// Elasticsearch directly
			if(id) {
				promise = esClient.getDocumentById(mapping, id);
			// Otherwise, retrieve documents based on other parameters if any
			} else {
				promise = esClient.searchDocuments(mapping);
			}

			return addPromiseHandlers(promise, res);
		},

		upsert: function(req, res) {
			var data = req.body,
				id = data.id,
				promise = null;

			// Delete ID as Elasticsearch stores it in a special field (_id)
		    delete data.id;

		    if(id == 'new') {
		        promise = esClient.postDocument(mapping, data);
		    } else {
		        promise = esClient.updateDocument(mapping, id, data);
		    }

		    return addPromiseHandlers(promise, res);
		},

		search: function(req, res) {
			var promise = esClient.searchIndex(req.body);
			return addPromiseHandlers(promise, res);
		}
	};
};