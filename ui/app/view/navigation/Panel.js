
Ext.define("Bizcuit.view.navigation.Panel",{
    extend: "Ext.tab.Panel",

    requires: [
        "Bizcuit.view.navigation.PanelController",
        "Bizcuit.view.navigation.PanelModel"
    ],

    xtype: 'navigation-panel',

    controller: "navigation-panel",
    viewModel: {
        type: "navigation-panel"
    },

    ui: 'navigation',

    tabPosition: 'left',
    tabRotation: 0,

    activeTab: 1,

    items: [
      {
        title: 'Home',
        glyph: 'xf015@FontAwesome',
        html: '&nbsp; This will contain a dashboard with latest updates.'
      },
      {
        title: 'Clients',
        glyph: 'xf0c0@FontAwesome',
        xtype: 'clients-panel'
      }
    ]


});
