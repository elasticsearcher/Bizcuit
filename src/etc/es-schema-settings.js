module.exports = {
    "mappings": {
        "client": {
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
                            "analyzer": "bizcuit_language_stemmer"
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
                                    "analyzer": "bizcuit_language_stemmer"
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
                                    "analyzer": "bizcuit_language_stemmer"
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
                                    "analyzer": "bizcuit_language_stemmer"
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
                            "analyzer": "bizcuit_language_stemmer"
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
                            "analyzer": "bizcuit_language_stemmer"
                        }
                    },
                    "type": "string",
                    "analyzer": "bizcuit_standard"
                },
                "price": {
                    "index": "not_analyzed",
                    "type": "double"
                },
                "created": {
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
                    "english_stemmer": {
                        "type": "stemmer",
                        "language": "english"
                    },
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
                    "bizcuit_language_stemmer": {
                        "filter": ["standard", "lowercase", "word_delimiter", "asciifolding", "english_stemmer"],
                        "tokenizer": "standard"
                    },
                    "bizcuit_edge_ngram": {
                        "filter": ["standard", "lowercase", "word_delimiter", "asciifolding", "edge_ngram"],
                        "tokenizer": "standard"
                    }
                }
            }
        }
    }
};
