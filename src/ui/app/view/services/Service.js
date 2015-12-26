
Ext.define("Bizcuit.view.services.Service",{
    extend: "Ext.form.Panel",

    requires: [
        "Bizcuit.view.services.ServiceController",
        "Bizcuit.view.services.ServiceModel"
    ],

    controller: "services-service",
    viewModel: {
        type: "services-service"
    },

    title: 'Service',

    layout: 'form',

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
    ],

    buttons: [
        {
            text: 'Cancel',
            handler: 'onCancel'
        },
        {
            text: 'Save',
            handler: 'onSave'
        }
    ]

});
