var util = require('util'),
    _ = require('underscore'),
    request = require('../http').request,
    localizeName = require('../etc/utils').localizeName;

var omittedFields = [
        '_source',
        '_index',
        '_id',
        '_type',
        '_version',
        'found'
];

function removeOmittedFields(doc) {
    omittedFields.forEach(function (field) {
        delete doc[field];
    });
}

module.exports = function (settings, locales) {
    var ES_URL = settings.url,
        INDEX = settings.index,
        INDEX_URL_TPL = util.format('%s/%s', ES_URL),
        INDEX_URL = util.format(INDEX_URL_TPL, INDEX),
        ES_SCHEMA_SETTINGS = require('../etc/es-schema-settings')(locales),
        DEFAULT_LOCALE = locales[0],
        INDEX_SETTINGS = ES_SCHEMA_SETTINGS.settings,
        MAPPINGS = ES_SCHEMA_SETTINGS.mappings;

    /*
     * This function copies localized values from localized fields into the
     * corresponding localization-agnostic fields. E.g. name_fr gets copied
     * to name. This is done in order to remove the indirection of figuring
     * out which localized field to use each time a value needs to be read.
     * This way, the user of the data just needs to know there is a field
     * with a certain name and the localization is handled implicitly.
     */
    function mapLocalizedFields(locale, mapping, doc) {
        var meta = MAPPINGS[mapping]._meta;

        // Return early if the mapping doesn't have any localized fields
        if (!meta.localizable) {
            return doc;
        }

        for (field in meta.localized_fields) {
            var localizedField = localizeName(locale, field);
            doc[field] = doc[localizedField];
        }

        return doc;
    }

    function unmapLocalizedFields(locale, mapping, doc) {
        var meta = MAPPINGS[mapping]._meta;

        // Return early if the mapping doesn't have any localized fields
        if (!meta.localizable) {
            return doc;
        }

        for (field in meta.localized_fields) {
            var localizedField = localizeName(locale, field),
                defaultLocaleField = localizeName(DEFAULT_LOCALE, field);

            doc[localizedField] = doc[field];
            // Set the localization-agnostic field to the value of the default locale
            doc[field] = doc[defaultLocaleField];
        }

        return doc;
    }

    function processSearchResults(locale, result) {
        var content = result.content;
        content.hits.hits.forEach(function (doc) {
            var source = doc._source,
                mapping = doc._type;
            mapLocalizedFields(locale, mapping, source);
        });

        return result;
    }

    var me = {
        deleteIndex: function () {
            console.log('Deleting index.');
            return request('DELETE', INDEX_URL);
        },

        createIndex: function () {
            console.log('Creating index.');
            return request('PUT', INDEX_URL, INDEX_SETTINGS);
        },

        createMappings: function () {
            console.log('Creating mappings.');
            var promises = [];

            // Create each mapping with its settings
            _.each(MAPPINGS, function (mappingSettings, mappingName) {
                var url = util.format('%s/_mapping/%s', INDEX_URL, mappingName);
                promises.push(request('PUT', url, mappingSettings));
            });

            return Promise.all(promises);
        },

        populateSampleData: function () {
            console.log('Creating test data.');
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
                        'name': 'Service One',
                        'name_fr-CA': 'Service Un',
                        'seo_id': 'service-one',
                        'seo_id_fr-CA': 'service-un',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        'description_fr-CA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        price: 100
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y08',
                        category_id: 'plumbing',
                        'name': 'Service Two',
                        'name_fr-CA': 'Service Deux',
                        'seo_id': 'service-two',
                        'seo_id_fr-CA': 'service-deux',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        'description_fr-CA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y09',
                        category_id: 'electrical-wiring',
                        'name': 'Service Three',
                        'name_fr-CA': 'Service Trois',
                        'seo_id': 'service-three',
                        'seo_id_fr-CA': 'service-trois',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        'description_fr-CA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y10',
                        category_id: 'electrical-wiring',
                        'name': 'Service Four',
                        'name_fr-CA': 'Service Quatre',
                        'seo_id': 'service-four',
                        'seo_id_fr-CA': 'service-quatre',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        'description_fr-CA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        price: 200
                    },
                    {
                        id: 'AVHaZbTo1RmTTqkz6Y11',
                        category_id: 'painting',
                        'name': 'Service Five',
                        'name_fr-CA': 'Service Cinq',
                        'seo_id': 'service-five',
                        'seo_id_fr-CA': 'service-cinq',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
                        'description_fr-CA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis justo ante, eu molestie velit ultricies in. Donec eget ultricies ligula. Quisque auctor nisi et lacus mollis, quis varius urna ornare. Nulla pharetra, dolor non varius condimentum, enim ante congue ipsum, sed ultricies odio ligula eget neque.',
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
                        'name': 'Painting',
                        'name_fr-CA': 'Peinture',
                        'seo_id': 'painting',
                        'seo_id_fr-CA': 'peinture',
                        'description': 'Anything from painting a single wall, ceiling, to the interior and exterior of an entire house. Windows, doors, furniture, fences, and more.',
                        'description_fr-CA': "Peinturer un seul mur, un plafond, ou l'intérieur et extérieur d'une maison entière. Fenêtres, portes, meubles, clôtures et plus."
                    },
                    {
                        id: 'plumbing',
                        'name': 'Plumbing',
                        'name_fr-CA': 'Plomberie',
                        'seo_id': 'plumbing',
                        'seo_id_fr-CA': 'plomberie',
                        'description': 'Critical plumbing services, like Garbage Disposal Replacement, Faucet Replacement, and Clogged Drain Repair are included in our catalog to help you keep your home safe from water damage and your life free from inconvenience.',
                        'description_fr-CA': "Services de plomberie critiques: remplacement d'élimination d'ordures, remplacement de robinets, réparation de bouche d'égouts."
                    },
                    {
                        id: 'electrical-wiring',
                        'name': 'Electrical & Wiring',
                        'name_fr-CA': 'Installations électriques',
                        'seo_id': 'electrical-wiring',
                        'seo_id_fr-CA': 'installations-électriques',
                        'description': '21st century upgrades like USB Wall Outlet Replacement, Electrical Toilet Seat Installation, Towel Warmer Installation, and Home Surveillance Camera Installation, as well as basic services like Bathroom Fan Installation, Electric Wall Heater Installation, and Light Fixture Replacement.',
                        'description_fr-CA': '21st century upgrades like USB Wall Outlet Replacement, Electrical Toilet Seat Installation, Towel Warmer Installation, and Home Surveillance Camera Installation, as well as basic services like Bathroom Fan Installation, Electric Wall Heater Installation, and Light Fixture Replacement.'
                    }
                ]
            };

            var promises = [];
            for (mapping in testData) {
                var data = testData[mapping];
                data.forEach(function (d) {
                    var id = d.id;
                    delete d.id;
                    promises.push(me.createDocument(DEFAULT_LOCALE, mapping, id, d));
                });
            }

            return Promise.all(promises);
        },

        reset: function () {
            var me = this;
            return me.deleteIndex()
                .then(me.createIndex, me.createIndex)
                .then(me.createMappings)
                .then(me.populateSampleData)
                .catch(function (error) {
                    console.log(error, error.stack);
                    return Promise.reject({ statusCode: 500 });
                });
        },

        createDocument: function (locale, mapping, id, doc) {
            doc.created = doc.updated = Date.now();

            // If an ID was provided, use it
            var url = null;
            if (id) {
                url = util.format('%s/%s/%s/_create?refresh=true', INDEX_URL, mapping, id);
            } else {
                // Otherwise, insert it with no ID to obtain a auto ID
                url = util.format('%s/%s?refresh=true', INDEX_URL, mapping);
            }

            return request('POST', url, unmapLocalizedFields(locale, mapping, doc));
        },

        updateDocument: function (locale, mapping, id, doc) {
            doc.updated = Date.now();
            removeOmittedFields(doc);
            return request('PUT', util.format('%s/%s/%s?refresh=true', INDEX_URL, mapping, id), unmapLocalizedFields(locale, mapping, doc));
        },

        searchIndex: function (locale, query) {
            query = query || {};
            query.from = 0;
            query.size = 10000;
            return request('POST', util.format('%s/_search', INDEX_URL), query)
                .then(processSearchResults.bind(me, locale));
        },

        searchDocuments: function (locale, mapping, query) {
            query = query || {};

            // TODO: get from/size from the query string
            query.from = 0;
            query.size = 10000;
            return request('POST', util.format('%s/%s/_search', INDEX_URL, mapping), query)
                .then(processSearchResults.bind(me, locale));
        },

        getDocumentById: function (locale, mapping, id) {
            return request('GET', util.format('%s/%s/%s', INDEX_URL, mapping, id))
                .then(function (result) {
                    mapLocalizedFields(locale, result.content._type, result.content._source);
                    return result;
                });
        },

        localizeField: function (locale, mapping, field) {
            var meta = MAPPINGS[mapping]._meta;

            if (meta.localizable && field in meta.localized_fields) {
                return localizeName(locale, field);
            }
            return field;
        }
    };

    return me;
}
