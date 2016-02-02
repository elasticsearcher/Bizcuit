
Ext.define('Bizcuit.store.ServicesCatalog', {
    extend: 'Ext.data.Store',

    storeId: 'ServicesCatalog',
    model: 'Bizcuit.model.Service',
    autoLoad: true,
    autoSync: true,

    proxy: {
        extraParams: {
            locale: gLocale
        },
        paramsAsJson: false,
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
