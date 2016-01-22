
Ext.define("Bizcuit.view.services.Service",{
    extend: "Bizcuit.view.base.ModelView",

    model: 'Bizcuit.model.Service',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name'
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            name: 'description'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Price',
            name: 'price'
        }
    ]
});
