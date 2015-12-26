Ext.define('Bizcuit.view.services.ServicesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.services-services',
    data: {
        name: 'Bizcuit'
    },

    stores: {
      Services: {
        model: 'Bizcuit.model.Service',
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
            read: '/api/services',
            create: '/api/services'
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
