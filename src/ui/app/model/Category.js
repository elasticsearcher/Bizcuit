Ext.define('Bizcuit.model.Category', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'name', type: 'string', mapping: '_source.name' },
        { name: 'description', type: 'string', mapping: '_source.description' }
    ],

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
          read: '/api/categories',
          create: '/api/categories',
          update: '/api/categories'
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
          type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
            //nameProperty: 'mapping'
        }
    }
});
