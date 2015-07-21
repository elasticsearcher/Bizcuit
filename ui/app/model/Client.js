Ext.define('Bizcuit.model.Client', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string', mapping: '_id' },
        { name: 'name', type: 'auto', mapping: '_source.name' },
        { name: 'email', type: 'auto', mapping: '_source.email' },
        { name: 'note', type: 'auto', mapping: '_source.note' }

    ]
});
