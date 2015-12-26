
Ext.define("Bizcuit.view.clients.Client",{
    extend: "Ext.form.Panel",

    requires: [
        "Bizcuit.view.clients.ClientController",
        "Bizcuit.view.clients.ClientModel"
    ],

    controller: "clients-client",
    viewModel: {
        type: "clients-client"
    },

    title: 'Client',

    layout: 'form',

    defaultType: 'textfield',

    items: [
        {
            fieldLabel: 'First Name',
            name: 'first_name'
        },
        {
            fieldLabel: 'Last Name',
            name: 'last_name'
        },
        {
            fieldLabel: 'Email',
            name: 'email'
        },
        {
            fieldLabel: 'Phone',
            name: 'phone'
        },
        {
            fieldLabel: 'Note',
            name: 'note'
        },
        {
            fieldLabel: 'Address',
            name: 'address_address1'
        },
        {
            fieldLabel: ' ',
            labelSeparator: '',
            name: 'address_address2'
        },
        {
            fieldLabel: 'City',
            name: 'address_city'
        },
        {
            fieldLabel: 'Province',
            name: 'address_province'
        },
        {
            fieldLabel: 'Postal Code',
            name: 'address_postal_code'
        },
        {
            fieldLabel: 'Country',
            name: 'address_country'
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
