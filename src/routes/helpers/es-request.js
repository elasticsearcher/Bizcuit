var settings = require('../../etc/settings'),
    esClient = require('../../es/es-client')(settings.elasticsearch);

module.exports = function(mapping) {
	// Empty mapping means perform the operations on all mappings
	mapping = mapping || '';

	function addPromiseHandlers(promise, res) {
		return promise.then(function(result) {
			var restlerResp = result[1],
				result = result[0];

			// If a response object is provided, write the JSON to it
			if(res) {
				// result.success = true;
	        	res.status(restlerResp.statusCode).json(result);
			} else {
				return result;
			}
	    }).catch(function(result) {
	    	var restlerResp = result[1],
				result = { error: result[0] };
	    	if(res) {
		        res.status(restlerResp.statusCode).json(result);
		    } else {
		    	return Promise.reject(result);
		    }
	    });
	}

	/*
	 * Retrieve a document from Elasticsearch and optionally send the document
	 * to a provided response object.
	 * :param id: (optional) id of the document to retrieve. If not provided,
	 * documents will be retrieved using other parameters.
	 * :param res: (optional) response object where retrieevd document(s) will
	 * be automatically sent.
	 */
	function get(id, res) {
		var promise = null;
		
		// If an ID was provided as a parameter, then get the document from
		// Elasticsearch directly
		if(id) {
			promise = esClient.getDocumentById(mapping, id);
		// Otherwise, retrieve documents based on other parameters if any
		} else {
			promise = esClient.searchDocuments(mapping);
		}

		return addPromiseHandlers(promise, res);
	}

	var me = {
		get: function(req, res) {
			var id = req.params && req.params.id;
			return get(id, res);
		},

		getById: function(id) {
			return get(id);
		},

		upsert: function(req, res) {
			var data = req.body,
				id = data.id,
				promise = null;

			// Delete ID as Elasticsearch stores it in a special field (_id)
		    delete data.id;

		    // Generate an SEO ID for the document
		    var seoId = me.generateSeoId(req.body);
		    if(seoId) {
		    	data.seo_id = seoId;
		    }

		    if(id == 'new') {
		        promise = esClient.createDocument(mapping, data);
		    } else {
		        promise = esClient.updateDocument(mapping, id, data);
		    }

		    return addPromiseHandlers(promise, res);
		},

		searchExact: function(field, value) {
			var query = {
				term: {
				}
			};
			query.term[field] = value;

			var promise = esClient.searchDocuments(mapping, { query: query });
			return addPromiseHandlers(promise);

		},

		searchGlobal: function(req, res) {
			var promise = esClient.searchIndex(req.body);
			return addPromiseHandlers(promise, res);
		},

		search: function(query) {
			var promise = esClient.searchDocuments(mapping, query);
			return addPromiseHandlers(promise);
		},

		generateSeoId: function(doc) {
			// Some IDs, such as service and category IDs are created directly from their names
			// in order to make URLs human-friendly and in addition facilitate SEO. A human-readable
			// ID makes it possible to use them directly in URL paths with sematic
			// meaning baked in and at the same time facilitate the mapping between the routes
			// and the resources.
			// E.g. a route like /services/:categoryId/:serviceId would result in a human-readable
			// path like /services/painting/walls-and-ceiling

			// If a doc doesn't have a name, can't generate a human-friendly ID
			if(!doc.name) {
				return null;
			}

			var name = doc.name,
			// To generate an ID from a name, we simply use a regex to extract all words from a name
			// and then join them with a hyphen:
				id = name.match(/(\w)+/g).join('-').toLowerCase();

			return id;
		}
	};

	return me;
};