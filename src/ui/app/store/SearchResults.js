Ext.define('Bizcuit.store.SearchResults', {
    extend: 'Ext.data.Store',

    storeId: 'SearchResults',
    //model: 'Bizcuit.model.SearchResult',
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
            read: '/api/search'
        },
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'hits.hits'
        }
    }
});
