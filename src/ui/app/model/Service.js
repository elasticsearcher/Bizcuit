Ext.define('Bizcuit.model.Service', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'name', type: 'string', mapping: '_source.name' },
        { name: 'description', type: 'string', mapping: '_source.description' },
        { name: 'price', type: 'number', mapping: '_source.price' },
        { name: 'created', type: 'date', mapping: '_source.created' }
    ],

    proxy: {
        extraParams: {},
        paramsAsJson: true,
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
