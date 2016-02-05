
/*
 * This clients store is used to look up client information from anywhere in the application.
 * It is distinct from the Clients store in the Clients view-model in that it is not meant
 * to be filtered or used for searching, but rather as a local cache of all available clients.
 */
Ext.define('Bizcuit.store.ClientsDirectory', {
    extend: 'Bizcuit.store.Base',

    storeId: 'ClientsDirectory',
    model: 'Bizcuit.model.Client',
    autoLoad: true,
    autoSync: true,

    proxy: {
        limitParam: 'size',
        pageParam: undefined,
        startParam: 'from',
        type: 'rest',
        noCache: false,
        api: {
            read: '/api/clients'
        },
        actionMethods: {
            //read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'hits.hits'
        }
    }
});
