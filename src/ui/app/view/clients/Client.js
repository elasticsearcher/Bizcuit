
Ext.define("Bizcuit.view.clients.Client", {
    extend: "Bizcuit.view.base.ModelView",

    model: 'Bizcuit.model.Client',

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
    ]
});
