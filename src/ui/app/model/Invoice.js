Ext.define('Bizcuit.model.Invoice', {
    extend: 'Bizcuit.model.Base',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'client_id', type: 'string', mapping: '_source.client_id' },
        { name: 'note', type: 'string', mapping: '_source.note' },
        { name: 'created', type: 'date', mapping: '_source.created' },
        { name: 'items', type: 'auto', mapping: '_source.items' }
    ],

    requires: [ 'Bizcuit.util.I18n' ],

    proxy: {
        limitParam: 'size',
        pageParam: undefined,
        startParam: 'from',
        type: 'rest',
        noCache: false,
        api: {
          read: '/api/invoices',
          create: '/api/invoices',
          update: '/api/invoices'
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
