
Ext.define("Bizcuit.view.clients.NewClientFormPanel",{
    extend: "Ext.form.Panel",

    xtype: 'clients.new-client-form',

    requires: [
        "Bizcuit.view.clients.NewClientFormPanelController",
        "Bizcuit.view.clients.NewClientFormPanelModel"
    ],

    defaultType: 'textfield',

    padding: 10,

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
        fieldLabel: 'Street Number',
        name: 'address_number'
      },
      {
        fieldLabel: 'Street',
        name: 'address_street'
      },
      {
        fieldLabel: 'Suite',
        name: 'address_suite'
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

    controller: "clients-newclientformpanel",
    viewModel: {
        type: "clients-newclientformpanel"
    }

});
