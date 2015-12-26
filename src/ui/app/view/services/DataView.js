Ext.define("Bizcuit.view.services.DataView", {
    extend: "Ext.view.View",

    requires: [
        "Bizcuit.view.services.DataViewController",
        "Bizcuit.view.services.DataViewModel"
    ],

    xtype: 'services-dataview',

    controller: "services-dataview",
    viewModel: {
        type: "services-dataview"
    },

    cls: 'dataview-container',

    tpl: [
        '<tpl for=".">',
            '<div class="shadow-panel service-tile">',
                '<b>{[this.getHighlightedValue(values, "name")]}</b> <br />',
                '${[this.getHighlightedValue(values, "price")]}',
                '<p>{[this.getHighlightedValue(values, "description")]}</p>',
                '<span><a href="#services/{id}">edit</a></span>',
            '</div>',
        '</tpl>',
        {
          getHighlightedValue: function(data, field) {
             // FIXME: refactor highlighter functions in all dataviews
            var value = data[field],
                highlight = data.highlight || {},
                edgeNGram = Ext.String.format('{0}.edge_ngram', field)
                highlightedValue = highlight[field] || highlight[edgeNGram];

            return highlightedValue || value;
          }
        }
    ],

    reference: 'servicesDataView',

    itemSelector: 'div',

    bind: {
      store: '{Services}'
    }
});
