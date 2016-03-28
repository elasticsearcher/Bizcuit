var settings = require('../../etc/settings'),
    esClient = require('../../es/es-client')(settings.elasticsearch, settings.locales),
    _ = require('underscore');

module.exports = function(mapping) {
	// Empty mapping means perform the operations on all mappings
	mapping = mapping || '';

	function addPromiseHandlers(promise, res) {
	    return promise.then(function (result) {
			// If a response object is provided, write the JSON to it
	        if (res) {
	        	res.status(result.statusCode).json(result.content);
			} else {
				return result.content;
			}
	    }).catch(function(result) {
	    	if(res) {
		        res.status(result.statusCode).json(result.content);
		    } else {
		    	return Promise.reject(result.content);
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
	function get(id, req, res) {
	    var promise = null,
	        locale = req.session.locale;
		
		// If an ID was provided as a parameter, then get the document from
		// Elasticsearch directly
		if(id) {
			promise = esClient.getDocumentById(locale, mapping, id);
		// Otherwise, retrieve documents based on other parameters if any
		} else {
            var nameSort = {};
            
            nameSort[esClient.localizeField(locale, mapping, 'name') + '.raw'] = {
                unmapped_type: 'string',
                order: 'asc'
            };
            
		    promise = esClient.searchDocuments(locale, mapping, {
                sort: [
                    nameSort
                ]
            });
		}

		return addPromiseHandlers(promise, res);
	}

	var me = {
		get: function(req, res) {
			var id = req.params && req.params.id;
			return get(id, req, res);
		},

		upsert: function(req, res) {
			var data = req.body,
				id = data.id,
				promise = null,
				locale = req.session.locale;

			// Delete ID as Elasticsearch stores it in a special field (_id)
		    delete data.id;

		    // Generate an SEO ID for the document
		    var seoId = me.generateSeoId(req.body);
		    if(seoId) {
		    	data.seo_id = seoId;
		    }

		    if (id == 'new') {
                // FIXME: locale should be dynamically retrieved
		        promise = esClient.createDocument(locale, mapping, null, data);
		    } else {
		        promise = esClient.updateDocument(locale, mapping, id, data);
		    }

		    return addPromiseHandlers(promise, res);
		},

		searchExact: function (locale, dict) {
            var field = null,
                matchClause = null,
                query = {
                    bool: {
                        must: []
                    }
                },
                must = query.bool.must;
            
            _.each(dict, function(val, field) {
                field = esClient.localizeField(locale, mapping, field);
                matchClause = {
                    match: {}
                };
                matchClause.match[field] = val;
                must.push(matchClause); 
            });

			var promise = esClient.searchDocuments(locale, mapping, { query: query });
			return addPromiseHandlers(promise);

		},

		searchGlobal: function(locale, query, res) {
		    var promise = esClient.searchIndex(locale, query);
			return addPromiseHandlers(promise, res);
		},

		search: function(locale, query) {
            var query = query || {},
                nameSort = {};
            nameSort[esClient.localizeField(locale, mapping, 'name') + '.raw'] = {
                unmapped_type: 'string',
                order: 'asc'
            };
            
            query.sort = [ nameSort ];
            
		    var promise = esClient.searchDocuments(locale, mapping, query);
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
			// To generate an ID from a name, we simply use a regex to extract all words
			// and then join them with a hyphen:
				id = name.match(/([\u00C0-\u1FFF\u2C00-\uD7FF\w])+/g).join('-').toLowerCase();

			return id;
		}
	};

	return me;
};