
Ext.define('Bizcuit.store.Categories', {
    extend: 'Bizcuit.store.Base',

    // storeId: 'Categories',
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
            read: '/api/categories'
        },
        reader: {
        type: 'json',
            rootProperty: 'hits.hits'
        }
    }
});
