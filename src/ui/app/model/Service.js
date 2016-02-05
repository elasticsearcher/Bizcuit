Ext.define('Bizcuit.model.Service', {
    extend: 'Bizcuit.model.Base',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'category_id', type: 'string', mapping: '_source.category_id' },
        { name: 'name', type: 'string', mapping: '_source.name' },
        { name: 'description', type: 'string', mapping: '_source.description' },
        { name: 'price', type: 'number', mapping: '_source.price' },
        { name: 'created', type: 'date', mapping: '_source.created' }
    ],

    requires: [ 'Bizcuit.util.I18n' ],

    proxy: {
        limitParam: 'size',
        pageParam: undefined,
        startParam: 'from',
        type: 'rest',
        noCache: false,
        api: {
          read: '/api/services',
          create: '/api/services',
          update: '/api/services'
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
        }
    }
});
