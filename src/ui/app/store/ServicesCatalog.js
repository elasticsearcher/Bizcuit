
Ext.define('Bizcuit.store.ServicesCatalog', {
    extend: 'Ext.data.Store',

    storeId: 'ServicesCatalog',
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
        read: '/api/services'
      },
      reader: {
        type: 'json',
        rootProperty: 'hits.hits'
      }
    }
});
