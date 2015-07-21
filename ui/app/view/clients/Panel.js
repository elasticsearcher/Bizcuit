
Ext.define("Bizcuit.view.clients.Panel",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.clients.PanelController",
        "Bizcuit.view.clients.PanelModel"
    ],

    xtype: 'clients-panel',

    ui: 'clients-panel',

    controller: "clients-panel",

    viewModel: {
        type: "clients-panel"
    },

    layout: {
      type: 'border'
    },

    padding: '0 10',

    items: [
      {
        xtype: 'clients.search-box',
        region: 'north'
      },
      {
        xtype: 'clients-dataview',
        region: 'center'
      }
    ]
});
