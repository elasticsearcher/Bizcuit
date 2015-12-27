Ext.define('Bizcuit.model.Order', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'client_id', type: 'string', mapping: '_source.client_id' },
        { name: 'note', type: 'string', mapping: '_source.note' },
        { name: 'created', type: 'date', mapping: '_source.created' },
        { name: 'items', type: 'auto', mapping: '_source.items' }
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
          read: '/api/orders',
          create: '/api/orders',
          update: '/api/orders'
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
