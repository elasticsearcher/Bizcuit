var restler = require('restler'),
    util = require('util'),
    _ = require('underscore');

function addPromiseCallbacks(restlerReq, resolve, reject) {
    restlerReq.on('success', function (result, response) {
        resolve([result, response]);
    })
    .on('fail', function (result, response) {
        reject([result, response]);
    });
}

function request(method, url, data) {
    method = method.toUpperCase();
    var req = null;

    switch (method) {
        case 'GET':
            req = restler.get(url);
            break;
        case 'POST':
            if (typeof (data) === 'object') {
                req = restler.postJson(url, data);
            } else {
                req = restler.post(url, {data: data})
            }
            break;
        case 'PUT':
            if (typeof (data) === 'object') {
                req = restler.putJson(url, data);
            } else {
                req = restler.put(url, { data: data })
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

function removeOmittedFields(doc) {
    omittedFields.forEach(function (field) {
        delete doc[field];
    });
}

function i18nSplitDoc(settings, mappingName, doc) {
    var localizedDoc = {},
        mainDoc = {},
        mapping = settings.mappings[mappingName],
        meta = mapping._meta;

    // If the mapping has no localizations, return it as-is
    if (!meta.localizable) {
        return [null, doc];
    }

    // Otherwise, split it into localized fields and core fields
    for (property in mapping.properties) {
        if (property in meta.localized_fields) {
            localizedDoc[property] = doc[property];
        } else {
            mainDoc[property] = doc[property];
        }
    }

    return [localizedDoc, mainDoc];
}

function makeLocalizedIndexName(name, locale) {
    // Note: index names must be lower-case
    return util.format('%s_%s', name, locale.toLowerCase());
}

module.exports = function (settings, locales) {
    var ES_URL = settings.url,
        INDEX = settings.index,
        INDEX_URL_TPL = util.format('%s/%s', ES_URL),
        INDEX_URL = util.format(INDEX_URL_TPL, INDEX),
        ES_SCHEMA_SETTINGS = require('../etc/es-schema-settings')(locales),
        MAPPINGS = ES_SCHEMA_SETTINGS.mappings;

    var omittedFields = [
        '_source',
        '_index',
        '_id',
        '_type',
        '_version',
        'found'
    ];

    function localizedIndexUrl(locale, index) {
        var localizedIndex = makeLocalizedIndexName(index, locale);
        return util.format(INDEX_URL_TPL, localizedIndex);
    }

    var me = {
        deleteIndexes: function () {
            console.log('Deleting indexes.');
            var promises = [],
                indexUrl = null,
                indexSettings = ES_SCHEMA_SETTINGS.settings;

            // Delete the main index
            indexUrl = INDEX_URL
            promises.push(request('DELETE', INDEX_URL));

            // Delete indexes that will store localized data
            locales.forEach(function (locale) {
                indexUrl = util.format(INDEX_URL_TPL, makeLocalizedIndexName(INDEX, locale));
                promises.push(request('DELETE', indexUrl));
            });

            return Promise.all(promises);
        },

        putIndexes: function () {
            console.log('Creating indexes.');
            var promises = [],
                indexUrl = null,
                indexSettings = ES_SCHEMA_SETTINGS.settings;

            // Create the main index
            indexUrl = INDEX_URL
            promises.push(request('PUT', INDEX_URL, indexSettings));

            // Create indexes that will store localized data
            locales.forEach(function (locale) {
                // Note: index names must be lower-case
                indexUrl = util.format(INDEX_URL_TPL, makeLocalizedIndexName(INDEX, locale));
                promises.push(request('PUT', indexUrl, indexSettings));
            });

            return Promise.all(promises);
        },

        putMappings: function () {
            console.log('Creating mappings.');
            var promises = [],
                mappings = {};
            // Add the main mappings
            mappings[''] = MAPPINGS;
            // Add the localized mappings
            _.extend(mappings, ES_SCHEMA_SETTINGS.localized_mappings);

            // Put all mappings into their respective index
            _.each(mappings, function (mappings, locale) {
                var indexName = locale ? makeLocalizedIndexName(INDEX, locale) : INDEX,
                    indexUrl = util.format(INDEX_URL_TPL, indexName);

                for (var name in mappings) {
                    var mapping = mappings[name],
                        url = util.format('%s/_mapping/%s', indexUrl, name);
                    promises.push(request('PUT', url, mapping));
                }
            });

            return Promise.all(promises);
        },

        populateTestData: function () {
            console.log('Creating test data.');
            var testData = {
                'en-CA': {
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
                                    sku_id: 'AVHaZbTo1RmTTqkz6Y07',
                                    quantity: 1,
                                    unit_price: 77,
                                    scheduled_delivery_date: '2016-01-10'
                                },
                                {
                                    sku_type: 'service',
                                    sku_id: 'AVHaZbTo1RmTTqkz6Y08',
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
                }
            };

            var promises = [];

            _.each(testData, function (mappings, locale) {
                for (mapping in mappings) {
                    var data = mappings[mapping];
                    data.forEach(function (d) {
                        var id = d.id;
                        delete d.id;
                        promises.push(me.createDocumentWithId(locale, mapping, id, d));
                    });
                }
            });

            return Promise.all(promises);
        },

        reset: function () {
            var me = this;
            return me.deleteIndexes()
                .then(me.putIndexes, me.putIndexes)
                .then(me.putMappings)
                .then(me.populateTestData)
                .catch(function (errors) {
                    console.log(errors);
                });
        },

        createDocument: function (mapping, doc) {
            doc.created = doc.updated = Date.now();

            var promise = new Promise(function (resolve, reject) {
                var req = restler.post(util.format('%s/%s?refresh=true', INDEX_URL, mapping), { data: JSON.stringify(doc) });
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        createDocumentWithId: function (locale, mapping, id, doc) {
            doc.created = doc.updated = Date.now();

            var urlTpl = '%s/%s/%s/_create?refresh=true',
                url = util.format(urlTpl, INDEX_URL, mapping, id),
                localizedIndex = makeLocalizedIndexName(INDEX, locale),
                localizedIndexUrl = util.format(INDEX_URL_TPL, localizedIndex),
                localizedUrl = util.format(urlTpl, localizedIndexUrl, mapping, id);
            
            var docSplit = i18nSplitDoc(ES_SCHEMA_SETTINGS, mapping, doc),
                localizedDoc = docSplit[0],
                mainDoc = docSplit[1];

            var bulkPayload = [{
                    create: {
                        _index: INDEX,
                        _type: mapping,
                        _id: id
                    }
                },
                mainDoc
            ];

            // When creating a doc, it must be created for all locales.
            if (localizedDoc) {
                locales.forEach(function (l) {
                    var doc = null;
                    if (l == locale) {
                        // Store the localized data in the index corresponding to the passed locale
                        doc = localizedDoc;
                    } else {
                        // Store an empty doc for all the other locales
                        doc = {};
                    }
                    bulkPayload.push({
                        create: {
                            _index: makeLocalizedIndexName(INDEX, l),
                            _type: mapping,
                            _id: id
                        }
                    });
                    bulkPayload.push(doc);
                })
            }

            bulkPayload = bulkPayload.map(function (obj) {
                return JSON.stringify(obj);
            });

            // Bulk payloads must turminate with an empty line, so we append an extra empty string
            bulkPayload.push('');
            // Join everything with a new line
            bulkPayload = bulkPayload.join('\n');

            return request('POST', util.format('%s/_bulk', ES_URL), bulkPayload);
        },

        updateDocument: function (mapping, id, doc) {
            doc.updated = Date.now();
            removeOmittedFields(doc);

            var promise = new Promise(function (resolve, reject) {
                var req = restler.put(util.format('%s/%s/%s?refresh=true', INDEX_URL, mapping, id), { data: JSON.stringify(doc) });
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        searchIndex: function (query) {
            query.from = 0;
            query.size = 10000;

            var promise = new Promise(function (resolve, reject) {
                var req = restler.post(util.format('%s/_search', INDEX_URL),
                    {
                        data: JSON.stringify(query)
                    });
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        },

        searchDocuments: function (mapping, query) {
            var promise = new Promise(function (resolve, reject) {
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

                if (query) {
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

        getDocumentById: function (mapping, id) {
            var promise = new Promise(function (resolve, reject) {
                var req = restler.get(util.format('%s/%s/%s', INDEX_URL, mapping, id));
                addPromiseCallbacks(req, resolve, reject);
            });

            return promise;
        }
    };

    return me;
}
