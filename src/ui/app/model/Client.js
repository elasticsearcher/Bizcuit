Ext.define('Bizcuit.model.Client', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'first_name', type: 'string', mapping: '_source.first_name' },
        { name: 'last_name', type: 'string', mapping: '_source.last_name' },
        { name: 'email', type: 'string', mapping: '_source.email' },
        { name: 'phone', type: 'string', mapping: '_source.phone' },
        { name: 'note', type: 'string', mapping: '_source.note' },
        { name: 'address_address1', type: 'string', mapping: '_source.address.address1' },
        { name: 'address_address2', type: 'string', mapping: '_source.address.address2' },
        { name: 'address_city', type: 'string', mapping: '_source.address.city' },
        { name: 'address_province', type: 'string', mapping: '_source.address.province' },
        { name: 'address_postal_code', type: 'string', mapping: '_source.address.postal_code' },
        { name: 'address_country', type: 'string', mapping: '_source.address.country' }
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
          read: '/api/clients',
          create: '/api/clients',
          update: '/api/clients'
        },
        actionMethods: {
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
