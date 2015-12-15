
Ext.define("Bizcuit.view.search.SearchBox",{
    extend: "Ext.panel.Panel",

    xtype: 'search-searchbox',

    requires: [
        "Bizcuit.view.search.SearchBoxController",
        "Bizcuit.view.search.SearchBoxModel"
    ],

    controller: "search-searchbox",
    viewModel: {
        type: "search-searchbox"
    },

    layout: {
      type: 'hbox'
    },

    //padding: '5 0 10 0',

    items: [
      {
        xtype: 'textfield',
        emptyText: 'Search...',
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
        width: 30,
        height: '100%'
      }
    ]
});
