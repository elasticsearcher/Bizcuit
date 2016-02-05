Ext.define('Bizcuit.store.SearchResults', {
    extend: 'Bizcuit.store.Base',

    storeId: 'SearchResults',
    //model: 'Bizcuit.model.SearchResult',
    autoLoad: true,
    autoSync: true,

    proxy: {
        extraParams: {
            query: ''
        },
        limitParam: 'size',
        pageParam: undefined,
        startParam: 'from',
        type: 'rest',
        noCache: false,
        api: {
            read: '/api/search'
        },
        actionMethods: {
        },
        reader: {
            type: 'json',
            rootProperty: 'hits.hits'
        }
    }
});
