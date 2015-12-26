Ext.define('Bizcuit.view.clients.ClientsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clients-clients',
    data: {
        name: 'Bizcuit'
    },

    stores: {
      Clients: {
        model: 'Bizcuit.model.Client',
        autoLoad: true,
        autoSync: true,
        proxy: {
          extraParams: {},
          paramsAsJson: true,
          limitParam: 'size',
          pageParam: undefined,
          startParam: 'from',
          type: 'rest',
          noCache: false,
          api: {
            read: '/api/clients',
            create: '/api/clients'
          },
          actionMethods: {
            //read: 'POST'
          },
          reader: {
            type: 'json',
            rootProperty: 'hits.hits'
          }
        }
      }
    }
});
