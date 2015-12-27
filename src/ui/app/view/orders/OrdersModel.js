Ext.define('Bizcuit.view.orders.OrdersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orders-orders',

    requires: [
    	'Bizcuit.model.Order'
    ],

    data: {
        name: 'Bizcuit'
    },

    stores: {
      Orders: {
        model: 'Bizcuit.model.Order',
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
            read: '/api/orders',
            create: '/api/orders'
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