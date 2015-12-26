
Ext.define("Bizcuit.view.clients.Clients",{
    extend: "Ext.container.Container",

    requires: [
        "Bizcuit.view.clients.ClientsController",
        "Bizcuit.view.clients.ClientsModel"
    ],

    controller: "clients-clients",
    viewModel: {
        type: "clients-clients"
    },

    layout: {
      type: 'vbox'
    },

    bind: {
      clientsStore: '{Clients}'
    },

    config: {
      clientsStore: null
    },

    items: [
      {
        xtype: 'toolbar',
        cls: 'shadow-panel',
        width: '100%',
        items: [
          {
            xtype: 'button',
            text: 'New Client',
            glyph: 'xf234@FontAwesome',
            scale: 'medium',
            listeners: {
              click: 'onNewClientClick'
            }
          }
        ]
      },
      {
        xtype: 'container',
        flex: 1,
        width: '100%',
        layout: 'fit',
        overflowY: 'auto',
        items: [
          {
            xtype: 'clients-dataview'
          }
        ]
      }
    ]
});
