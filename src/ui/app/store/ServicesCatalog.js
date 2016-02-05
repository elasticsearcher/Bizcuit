
Ext.define('Bizcuit.store.ServicesCatalog', {
    extend: 'Bizcuit.store.Base',

    storeId: 'ServicesCatalog',
    model: 'Bizcuit.model.Service',
    autoLoad: true,
    autoSync: true,

    proxy: {
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
