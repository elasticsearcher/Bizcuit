
var _ = require('underscore'),
    utils = require('./utils'),
    localizeName = utils.localizeName;

var commonStemmerFilters = ["standard", "lowercase", "word_delimiter", "asciifolding"];

function pushAndReturn(arr, val) {
    arr.push(val);
    return arr;
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function generateStemmers(settings, locales) {
    var stemmers = settings.i18n.stemmers;

    locales.forEach(function (locale) {
        var stemmerLang = stemmers[locale] || 'english',
            stemmerName = stemmerLang + '_stemmer',
            indexSettings = settings.settings.index;

        indexSettings.analysis.filter[stemmerName] = {
            'type': 'stemmer',
            'language': stemmerLang
        };

        indexSettings.analysis.analyzer[stemmerName] = {
            "filter": pushAndReturn(commonStemmerFilters.slice(), stemmerName),
            "tokenizer": "standard"
        };
    });

    return settings;
}

function generateLocalizedFields(baseSettings, locales) {
    var mappings = baseSettings.mappings,
        localizedMappingNames = _.keys(mappings).filter(function (name) {
            // Only select those mappings that are localizable
            return mappings[name]._meta.localizable;
        });

    localizedMappingNames.forEach(function (name) {
        var mapping = mappings[name];

        _.each(mapping.properties, function (options, propertyName) {
            if (mapping._meta.localized_fields[propertyName]) {
                // Create a localized field for each supported locale
                locales.forEach(function (locale) {
                    // Deep copy the property definition so we don't modify the original one
                    var property = deepCopy(mapping.properties[propertyName]);
                    // If the property has a language stemmer field, then set it to the correct locale
                    // to make sure that the field's analyzer is configured for the correct language
                    var languageStemmer = property.fields && property.fields.language_stemmer;
                    if (languageStemmer) {
                        languageStemmer.analyzer = baseSettings.i18n.stemmers[locale] + '_stemmer';
                    }

                    // Add the localized field to the mapping
                    var localizedPropertyName = localizeName(locale, propertyName);
                    mapping.properties[localizedPropertyName] = property;
                });
            }
        });
    });

    return baseSettings;
}

function generateSettings(settings, locales) {
    settings = generateStemmers(settings, locales);
    settings = generateLocalizedFields(settings, locales);
    return settings;
}

var baseSettings = {
    "i18n": {
        "stemmers": {
            "en-CA": "english",
            "fr-CA": "french"
        }
    },
    "mappings": {
        "client": {
            "_meta": {
                "localizable": false
            },
            "properties": {
                "phone": {
                    "index": "analyzed",
                    "type": "string",
                    "analyzer": "standard"
                },
                "note": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "last_name": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "email": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "created": {
                    "index": "not_analyzed",
                    "type": "date"
                },
                "updated": {
                    "index": "not_analyzed",
                    "type": "date"
                },
                "first_name": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index": "analyzed",
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "address": {
                    "properties": {
                        "address1": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                },
                                "language_stemmer": {
                                    "type": "string",
                                    "analyzer": "english_stemmer"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        },
                        "address2": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                },
                                "language_stemmer": {
                                    "type": "string",
                                    "analyzer": "english_stemmer"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        },
                        "postal_code": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        },
                        "city": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                },
                                "language_stemmer": {
                                    "type": "string",
                                    "analyzer": "english_stemmer"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        },
                        "province": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        },
                        "country": {
                            "index": "analyzed",
                            "fields": {
                                "edge_ngram": {
                                    "index_analyzer": "bizcuit_edge_ngram",
                                    "search_analyzer": "bizcuit_standard",
                                    "type": "string"
                                }
                            },
                            "type": "string",
                            "analyzer": "bizcuit_standard"
                        }
                    },
                    "type": "object"
                }
            },
            "dynamic": "strict"
        },
        "service": {
            "_meta": {
                "localizable": true,
                "localized_fields": {
                    "name": {},
                    "description": {},
                    "seo_id": {}
                }
            },
            "properties": {
                "name": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "description": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "seo_id": {
                    "index": "not_analyzed",
                    "type": "string"
                },
                "category_id": {
                    "index": "not_analyzed",
                    "type": "string"
                },
                "price": {
                    "index": "not_analyzed",
                    "type": "double"
                },
                "created": {
                    "index": "not_analyzed",
                    "type": "date"
                },
                "updated": {
                    "index": "not_analyzed",
                    "type": "date"
                }
            },
            "dynamic": "strict"
        },
        "order": {
            "_meta": {
                "localizable": false
            },
            "properties": {
                "client_id": {
                    "index": "not_analyzed",
                    "type": "string"
                },
                "note": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "items": {
                    "type": "nested",
                    "properties": {
                        "sku_type": {
                            "index": "not_analyzed",
                            "type": "string"
                        },
                        "sku_id": {
                            "index": "not_analyzed",
                            "type": "string"
                        },
                        "quantity": {
                            "index": "not_analyzed",
                            "type": "integer"
                        },
                        "unit_price": {
                            "index": "not_analyzed",
                            "type": "double"
                        },
                        "scheduled_delivery_date": {
                            "index": "not_analyzed",
                            "type": "date"
                        }
                    }
                },
                "created": {
                    "index": "not_analyzed",
                    "type": "date"
                },
                "updated": {
                    "index": "not_analyzed",
                    "type": "date"
                }
            },
            "dynamic": "strict"
        },
        "category": {
            "_meta": {
                "localizable": true,
                "localized_fields": {
                    "name": {},
                    "description": {},
                    "seo_id": {}
                }
            },
            "properties": {
                "name": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "description": {
                    "index": "analyzed",
                    "fields": {
                        "edge_ngram": {
                            "index_analyzer": "bizcuit_edge_ngram",
                            "search_analyzer": "bizcuit_standard",
                            "type": "string"
                        },
                        "language_stemmer": {
                            "type": "string",
                            "analyzer": "english_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "seo_id": {
                    "index": "not_analyzed",
                    "type": "string"
                },
                "created": {
                    "index": "not_analyzed",
                    "type": "date"
                },
                "updated": {
                    "index": "not_analyzed",
                    "type": "date"
                }
            },
            "dynamic": "strict"
        }
    },
    "settings": {
        "index": {
            "number_of_replicas": 1,
            "number_of_shards": 5,
            "analysis": {
                "filter": {
                    // Language stemmers will be inserted here based on the i18n.stemmer config, like so:
                    //"english_stemmer": {
                    //    "type": "stemmer",
                    //    "language": "english"
                    //},
                    //"french_stemmer": {
                    //    "type": "stemmer",
                    //    "language": "french"
                    //},
                    "edge_ngram": {
                        "token_chars": ["letter", "digit"],
                        "max_gram": 8,
                        "min_gram": 2,
                        "type": "edgeNGram"
                    }
                },
                "analyzer": {
                    "bizcuit_standard": {
                        "filter": ["standard", "lowercase", "word_delimiter", "asciifolding"],
                        "tokenizer": "standard"
                    },
                    // Language analyziers will be inserted here based on the i18n.stemmer config, like so:
                    //"english_stemmer": {
                    //    "filter": pushAndReturn(commonStemmerFilters.slice(), "english_stemmer"),
                    //    "tokenizer": "standard"
                    //},
                    "bizcuit_edge_ngram": {
                        "filter": ["standard", "lowercase", "word_delimiter", "asciifolding", "edge_ngram"],
                        "tokenizer": "standard"
                    }
                }
            }
        }
    }
};

module.exports = function (locales) {
    return generateSettings(baseSettings, locales);
};
