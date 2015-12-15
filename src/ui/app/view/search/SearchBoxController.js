Ext.define('Bizcuit.view.search.SearchBoxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-searchbox',

    onSearchTextFieldKeydown: function(textfield, e, eOpts) {
      if(e.getKey() == e.ENTER) {
        var query = textfield.getValue();

        var emptySearch = {
          "query": {
            "match_all": {}
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
