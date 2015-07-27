
Ext.define("Bizcuit.view.clients.Panel",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.clients.PanelController",
        "Bizcuit.view.clients.PanelModel",
        "Bizcuit.view.clients.NewClientFormPanel"
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

    bind: {
      clientsStore: '{Clients}'
    },

    config: {
      clientsStore: null
    },

    items: [
      {
        xtype: 'container',
        layout: 'auto',
        region: 'north',
        items: [
          {
            xtype: 'toolbar',
            padding: '10 0 5 0',
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
            xtype: 'clients.search-box'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'fit',
        region: 'center',
        overflowY: 'auto',
        items: [
          {
            xtype: 'clients-dataview'
          }
        ]
      }
    ]
});
