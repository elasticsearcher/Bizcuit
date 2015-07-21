Ext.define('Bizcuit.view.clients.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clients-panel',
    data: {
        name: 'Bizcuit'
    },

    stores: {
      Clients: {
        model: 'Bizcuit.model.Client',
        autoLoad: true,
        proxy: {
          extraParams: {},
          paramsAsJson: true,
          limitParam: 'size',
          pageParam: undefined,
          startParam: 'from',
          type: 'rest',
          api: {
            read: 'http://localhost:9200/bizcuit/client/_search'
          },
          actionMethods: {
            read: 'POST'
          },
          reader: {
            type: 'json',
            rootProperty: 'hits.hits'
          }
        }
      }
    }

});
