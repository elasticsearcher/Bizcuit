var restler = require('restler'),
    util = require('util');

module.exports = function(settings) {
    var ES_URL = settings.url,
        INDEX = settings.index,
        INDEX_URL = util.format('%s/%s', ES_URL, INDEX),
        ES_SCHEMA_SETTINGS = require('../etc/es-schema-settings'),
        MAPPINGS = ES_SCHEMA_SETTINGS.mappings;

    return {
        deleteIndex: function() {
            console.log(util.format('DELETE index %s', INDEX));
            return restler.del(INDEX_URL);
        },

        putIndex: function() {
            console.log(util.format('PUT index %s', INDEX));
            return restler.put(INDEX_URL, { data: JSON.stringify(ES_SCHEMA_SETTINGS.settings) });
        },

        putMappings: function() {
            console.log('PUT MAPPING DERP TEH DERP');
            var last = null;

            for(var name in MAPPINGS) {
                var mapping = MAPPINGS[name];
                console.log(mapping);
                last = restler.put(util.format('%s/_mapping/%s', INDEX_URL, name), { data: JSON.stringify(mapping) });
            }

            return last;
        },

        populateTestData: function() {
            var clients = [{
                'first_name': 'John',
                'last_name': 'Doe',
                'email': 'john.doe@bizcuit.com',
                'phone': '555-555-5555',
                'note': 'Return customer.',
                'address': {
                    'address1': '100 Anonymous St.',
                    'address2': 'Suite 1',
                    'city': 'Metropolis',
                    'province': 'XX'
                }
            },
            {
                'first_name': 'Jane',
                'last_name': 'Doe',
                'email': 'jane.doe@bizcuit.com',
                'phone': '555-555-5555',
                'note': 'Return customer.',
                'address': {
                    'address1': '100 Anonymous St.',
                    'address2': 'Suite 1',
                    'city': 'Metropolis',
                    'province': 'XX'
                }
            }]

            clients.forEach(function(client) {
                restler.post(util.format('%s/client/', INDEX_URL), { data: JSON.stringify(client)})
                    .on('complete', function(result, response) {
                        console.log(util.format('POST client %s %s %s', client.email, util.inspect(result, false, null), response));
                    })
            });
        },

        reset: function() {
            var me = this;
            me.deleteIndex().on('success', function() {
                me.putIndex().on('success', function() {
                    me.putMappings().on('success', function() {
                        // FIXME: restler doesn't provide a functionality that
                        // lets you "gather results" of several concurrently
                        // executing requests before firing another request, so
                        // we have to resort to an ugly arbitrary wait period to
                        // "try" to make sure that all mappings get set up before
                        // any data gets committed.
                        setTimeout(me.populateTestData, 3000);
                    })
                });
            });
        },

        postDocument: function(mapping, doc, res) {
            restler.post(util.format('%s/%s', INDEX_URL, mapping), { data: JSON.stringify(doc)})
                .on('success', function(result, response) {
                    res.status(201).json({ success: true });
                })
                .on('fail', function(result, response) {
                    res.status(result.status).json({ error: result });
                });
        }
    };
}
