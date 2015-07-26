
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
        fieldLabel: 'Name',
        name: 'name'
      },
      {
        fieldLabel: 'Email',
        name: 'email'
      },
      {
        fieldLabel: 'Note',
        name: 'note'
      }
    ],

    controller: "clients-newclientformpanel",
    viewModel: {
        type: "clients-newclientformpanel"
    }

});
