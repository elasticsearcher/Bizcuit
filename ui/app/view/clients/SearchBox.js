
Ext.define("Bizcuit.view.clients.SearchBox",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.clients.SearchBoxController",
        "Bizcuit.view.clients.SearchBoxModel"
    ],

    xtype: 'clients.search-box',

    ui: 'search-box',

    controller: "clients-searchbox",
    viewModel: {
        type: "clients-searchbox"
    },

    bind: {
      clientsStore: '{Clients}'
    },

    config: {
      clientsStore: null
    },

    layout: {
      type: 'hbox'
    },

    padding: '10 0 10 0',

    items: [
      {
        xtype: 'textfield',
        emptyText: 'Press ENTER to search...',
        flex: 1,
        enableKeyEvents: true,
        listeners: {
          keydown: 'onSearchTextFieldKeydown'
        }
      },
      {
        xtype: 'button',
        ui: 'search-button',
        glyph: 'xf002@FontAwesome',
        scale: 'small',
        width: 30
      }
    ]
});
