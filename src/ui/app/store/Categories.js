
Ext.define('Bizcuit.store.Categories', {
    extend: 'Ext.data.Store',

    // storeId: 'Categories',
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
        read: '/api/categories'
      },
      reader: {
        type: 'json',
        rootProperty: 'hits.hits'
      }
    }
});
