Ext.define('Bizcuit.model.Client', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'first_name', type: 'string', mapping: '_source.first_name' },
        { name: 'last_name', type: 'string', mapping: '_source.last_name' },
        { name: 'email', type: 'string', mapping: '_source.email' },
        { name: 'note', type: 'string', mapping: '_source.note' },
        { name: 'address_number', type: 'string', mapping: '_source.address.number' },
        { name: 'address_street', type: 'string', mapping: '_source.address.street' },
        { name: 'address_suite', type: 'string', mapping: '_source.address.suite' },
        { name: 'address_city', type: 'string', mapping: '_source.address.city' },
        { name: 'address_province', type: 'string', mapping: '_source.address.province' },
        { name: 'address_postal_code', type: 'string', mapping: '_source.address.postal_code' },
        { name: 'address_country', type: 'string', mapping: '_source.address.country' }

    ]
});
