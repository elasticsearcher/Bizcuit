Ext.define('Bizcuit.view.search.SearchBoxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-searchbox',

    onSearchTextFieldKeydown: function(textfield, e, eOpts) {
      if(e.getKey() == e.ENTER) {
        var query = textfield.getValue();

        var emptySearch = {
          "query": {
            "match_all": {}
          },

          "sort": {
              'updated': {
                  "order": 'desc'
              }
          }
        };

        var searchTpl = {
          "query": {
            "multi_match": {
              "query": query,
              "fields": [
                {
                  "first_name.edge_ngram": {}
                },
                {
                  "last_name.edge_ngram": {}
                },
                {
                  "email.edge_ngram": {}
                },
                {
                  "name.edge_ngram": {}
                },
                {
                  "name.language_stemmer": {}
                },
                {
                  "description.edge_ngram": {}
                },
                {
                  "description.language_stemmer": {}
                },
                {
                  "address.address1": {}
                },
                {
                  "address.address1.edge_ngram": {}
                },
                {
                  "address.address1.language_stemmer": {}
                },
                {
                  "address.address2.edge_ngram": {}
                },
                {
                  "address.address2.language_stemmer": {}
                },
                {
                  "address.city.edge_ngram": {}
                },
                {
                  "address.city.language_stemmer": {}
                },
                {
                  "address.postal_code.edge_ngram": {}
                },
                {
                  "address.postal_code.language_stemmer": {}
                },
                {
                  "address.province.edge_ngram": {}
                },
                {
                  "address.province.language_stemmer": {}
                },
                {
                  "address.country.edge_ngram": {}
                },
                {
                  "address.country.language_stemmer": {}
                },
                {
                  "note": {}
                },
                {
                  "note.edge_ngram": {}
                },
                {
                  "note.language_stemmer": {}
                }
              ]
            }
          },
          "highlight": {
            "num_fragments": 0,
            "fields": [
              {
                "first_name.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "last_name.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "name.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "name.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "description.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "description.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.address1.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.address1.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.address2.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.address2.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.city.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.city.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.postal_code.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.postal_code.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.province.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.province.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.country.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "address.country.language_stemmer": {
                  "number_of_fragments": 0
                }
              },
              {
                "email.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "note": {
                  "number_of_fragments": 0
                }
              },
              {
                "note.edge_ngram": {
                  "number_of_fragments": 0
                }
              },
              {
                "note.language_stemmer": {
                  "number_of_fragments": 0
                }
              }
            ]
          }
        };

        var params = query.trim() ? searchTpl : emptySearch;

        var store = Ext.getStore('SearchResults');
        var proxy = store.getProxy();
        proxy.setExtraParams(params);
        store.load();
        this.redirectTo('#search');
      }
    }
});
