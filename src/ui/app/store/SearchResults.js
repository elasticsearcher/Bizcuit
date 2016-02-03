Ext.define('Bizcuit.store.SearchResults', {
    extend: 'Ext.data.Store',

    storeId: 'SearchResults',
    //model: 'Bizcuit.model.SearchResult',
    autoLoad: true,
    autoSync: true,

    proxy: {
        extraParams: {
        },
        paramsAsJson: true,
        limitParam: 'size',
        pageParam: undefined,
        startParam: 'from',
        type: 'rest',
        noCache: false,
        api: {
            // For some reason, extraParams don't get sent when actionMethods are overriden
            read: '/api/search?' + 'locale=' + gLocale
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
