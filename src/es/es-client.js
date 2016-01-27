var restler = require('restler'),
    util = require('util');

function addPromiseCallbacks(restlerReq, resolve, reject) {
    restlerReq.on('success', function(result, response) {
        resolve([result, response]);
    })
    .on('fail', function(result, response) {
        reject([result, response]);
    });
}

function request(method, url, data) {
    method = method.toUpperCase();
    var req = null;

    switch(method) {
        case 'GET':
            req = restler.get(url);
            break;
        case 'POST':
            req = restler.postJson(url, data);
            break;
        case 'PUT':
            req = restler.putJson(url, data);
            break;
        case 'DELETE':
            req = restler.del(url);
            break;
        default:
            throw { error: 'Unknown method: ' + method }
    }

    return new Promise(function(resolve, reject) {
        addPromiseCallbacks(req, resolve, reject);
    });
}

module.exports = function(settings) {
    var ES_URL = settings.url,
        INDEX = settings.index,
        INDEX_URL = util.format('%s/%s', ES_URL, INDEX),
        ES_SCHEMA_SETTINGS = require('../etc/es-schema-settings'),
        MAPPINGS = ES_SCHEMA_SETTINGS.mappings;

        var omittedFields = [
            '_source',
            '_index',
            '_id',
            '_type',
            '_version',
            'found'
        ];

        function removeOmittedFields(doc) {
            omittedFields.forEach(function(field) {
                delete doc[field];
            });
        }

    return {
        deleteIndex: function() {
            return request('DELETE', INDEX_URL);
        },

        putIndex: function() {
            return request('PUT', INDEX_URL, ES_SCHEMA_SETTINGS.settings);
        },

        putMappings: function() {
            var promises = [];

            for(var name in MAPPINGS) {
                var mapping = MAPPINGS[name],
                    url = util.format('%s/_mapping/%s', INDEX_URL, name);
                promises.push(request('PUT', url, mapping));
            }

            return Promise.all(promises);
        },

        populateTestData: function() {
            var testData = {
                client: [{
                    'id': 'AVHcoyET0BQ7Qcq9ISBP',
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
                    'id': 'AVHaZbTo1RmTTqkz6Y08',
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
                }],

                service: [
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y07',
                        category_id: 'plumbing',
                        name: 'Service 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        price: 100
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y08',
                        category_id: 'plumbing',
                        name: 'Service 2',
                        description: 'Aenean non odio dignissim nulla convallis volutpat sed non lectus. Nam vitae dui nec massa molestie dapibus et nec nisl. Nullam sit amet neque nisi. Aliquam facilisis dictum nunc in interdum. In hac habitasse platea dictumst. Etiam ultrices consectetur arcu, non porta urna lacinia et. Etiam gravida lectus sem. Vivamus turpis arcu, porttitor at feugiat et, ultrices eget justo.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y09',
                        category_id: 'electrical-wiring',
                        name: 'Service 3',
                        description: 'Aenean non odio dignissim nulla convallis volutpat sed non lectus. Nam vitae dui nec massa molestie dapibus et nec nisl. Nullam sit amet neque nisi. Aliquam facilisis dictum nunc in interdum. In hac habitasse platea dictumst. Etiam ultrices consectetur arcu, non porta urna lacinia et. Etiam gravida lectus sem. Vivamus turpis arcu, porttitor at feugiat et, ultrices eget justo.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y10',
                        category_id: 'electrical-wiring',
                        name: 'Service 4',
                        description: 'Aenean non odio dignissim nulla convallis volutpat sed non lectus. Nam vitae dui nec massa molestie dapibus et nec nisl. Nullam sit amet neque nisi. Aliquam facilisis dictum nunc in interdum. In hac habitasse platea dictumst. Etiam ultrices consectetur arcu, non porta urna lacinia et. Etiam gravida lectus sem. Vivamus turpis arcu, porttitor at feugiat et, ultrices eget justo.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y11',
                        category_id: 'painting',
                        name: 'Service 5',
                        description: 'Aenean non odio dignissim nulla convallis volutpat sed non lectus. Nam vitae dui nec massa molestie dapibus et nec nisl. Nullam sit amet neque nisi. Aliquam facilisis dictum nunc in interdum. In hac habitasse platea dictumst. Etiam ultrices consectetur arcu, non porta urna lacinia et. Etiam gravida lectus sem. Vivamus turpis arcu, porttitor at feugiat et, ultrices eget justo.',
                        price: 200
                    }
                ],

                order: [
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y08',
                        client_id: 'AVHcoyET0BQ7Qcq9ISBP',
                        note: 'Delivery date to be confirmed.',
                        created: '2015-12-25',
                        items: [
                            {
                                sku_type: 'service',
                                sku_id: 'AVHaZbTo1RmTTqkz6Y07' ,
                                quantity: 1,
                                unit_price: 77,
                                scheduled_delivery_date: '2016-01-10'
                            },
                            {
                                sku_type: 'service',
                                sku_id: 'AVHaZbTo1RmTTqkz6Y08' ,
                                quantity: 2,
                                unit_price: 88,
                                scheduled_delivery_date: '2016-01-12'
                            }
                        ]
                    }

                ],

                category: [
                    {
                        id: 'painting',
                        seo_id: 'painting',
                        name: 'Painting',
                        description: 'Anything from painting a single wall, ceiling, to the interior and exterior of an entire house. Windows, doors, furniture, fences, and more.'
                    },
                    {
                        id: 'plumbing',
                        seo_id: 'plumbing',
                        name: 'Plumbing',
                        description: 'Critical plumbing services, like Garbage Disposal Replacement, Faucet Replacement, and Clogged Drain Repair are included in our catalog to help you keep your home safe from water damage and your life free from inconvenience.'
                    },
                    {
                        id: 'electrical-wiring',
                        seo_id: 'electrical-wiring',
                        name: 'Electrical & Wiring',
                        description: '21st century upgrades like USB Wall Outlet Replacement, Electrical Toilet Seat Installation, Towel Warmer Installation, and Home Surveillance Camera Installation, as well as basic services like Bathroom Fan Installation, Electric Wall Heater Installation, and Light Fixture Replacement.'
                    }
                ]
            };
            
            var promises = [];

            for(mapping in testData) {
                var data = testData[mapping];
                data.forEach(function(d) {
                    var id = d.id,
                        url = util.format('%s/%s/%s', INDEX_URL, mapping, id);
                    delete d.id;
                    promises.push(request('PUT', url, d));
                });
            }

            return Promise.all(promises);
        },

        reset: function() {
            var me = this;
            return me.deleteIndex()
                .then(me.putIndex, me.putIndex)
                .then(me.putMappings)
                .then(me.populateTestData)
                .catch(function(errors) {
                    console.log(errors);
                });
        },

        createDocument: function(mapping, doc) {
            doc.created = doc.updated = Date.now();

            var promise = new Promise(function(resolve, reject) {
                var req = restler.post(util.format('%s/%s?refresh=true', INDEX_URL, mapping), { data: JSON.stringify(doc)});
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        createDocumentWithId: function(mapping, id, doc) {
            doc.created = doc.updated = Date.now();

            var promise = new Promise(function(resolve, reject) {
                var req = restler.post(util.format('%s/%s/%s/_create?refresh=true', INDEX_URL, mapping, id),
                                       { data: JSON.stringify(doc)});
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        updateDocument: function(mapping, id, doc) {
            doc.updated = Date.now();
            removeOmittedFields(doc);

            var promise = new Promise(function(resolve, reject) {
                var req = restler.put(util.format('%s/%s/%s?refresh=true', INDEX_URL, mapping, id), { data: JSON.stringify(doc)});
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        searchIndex: function(query) {
            query.from = 0;
            query.size = 10000;
            
            var promise = new Promise(function(resolve, reject) {
                var req = restler.post(util.format('%s/_search', INDEX_URL), 
                    {
                        data: JSON.stringify(query)
                    });
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        searchDocuments: function(mapping, query) {
            var promise = new Promise(function(resolve, reject) {
                var data = {
                    // TODO: get from/size from the query string
                    from: 0,
                    size: 10000,
                    sort: {
                        'updated': {
                            order: 'desc'
                        }
                    }
                };

                if(query) {
                    data.query = query.query;
                }

                var req = restler.post(util.format('%s/%s/_search', INDEX_URL, mapping), 
                {
                    data: JSON.stringify(data)
                });

                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        getDocumentById: function(mapping, id) {
            var promise = new Promise(function(resolve, reject) {
                var req = restler.get(util.format('%s/%s/%s', INDEX_URL, mapping, id));
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        }
    };
}
