
Ext.define("Bizcuit.view.search.Results",{
    extend: "Ext.container.Container",

    requires: [
        "Bizcuit.view.search.ResultsController",
        "Bizcuit.view.search.ResultsModel",
        'Bizcuit.view.search.DataView'
    ],

    controller: "search-results",
    viewModel: {
        type: "search-results"
    },

    layout: {
      type: 'vbox'
    },

    items: [
      {
        xtype: 'container',
        flex: 1,
        width: '100%',
        layout: {
            type: 'fit'
        },
        overflowY: 'auto',
        flex: 1,
        items: [
          {
            xtype: 'search-dataview'
          }
        ]
      }
    ]
});
