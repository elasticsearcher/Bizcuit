
Ext.define("Bizcuit.view.services.Services",{
    extend: "Ext.container.Container",

    requires: [
        "Bizcuit.view.services.ServicesController",
        "Bizcuit.view.services.ServicesModel",
        "Bizcuit.view.services.DataView"
    ],

    controller: "services-services",
    viewModel: {
        type: "services-services"
    },

    layout: {
      type: 'vbox'
    },

    bind: {
      clientsStore: '{Services}'
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
            text: 'New Service',
            glyph: 'xf067@FontAwesome',
            scale: 'medium',
            listeners: {
              click: 'onNewServiceClick'
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
            xtype: 'services-dataview'
          }
        ]
      }
    ]
});
