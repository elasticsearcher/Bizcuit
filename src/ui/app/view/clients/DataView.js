Ext.define("Bizcuit.view.clients.DataView", {
    extend: "Ext.view.View",

    requires: [
        "Bizcuit.view.clients.DataViewController",
        "Bizcuit.view.clients.DataViewModel"
    ],

    xtype: 'clients-dataview',

    controller: "clients-dataview",
    viewModel: {
        type: "clients-dataview"
    },

    cls: 'dataview-container',

    tpl: [
        '<tpl for=".">',
            '<div class="shadow-panel client-tile">',
                '<b>{[this.getHighlightedValue(values, "first_name")]} \
                {[this.getHighlightedValue(values, "last_name")]}</b> <br />',
                'Email: {[this.getHighlightedValue(values, "email")]} <br />',
                'Phone: {[this.getHighlightedValue(values, "phone")]} <br />',
                '<br />',
                'Note: {[this.getHighlightedValue(values, "note")]} <br />',
                '<br />',
                'Address: <br />',
                '{[this.getHighlightedValue(values, "address_address1")]} ',
                '<br />',
                '{[this.getHighlightedValue(values, "address_address2")]} ',
                '<br />',
                '{[this.getHighlightedValue(values, "address_city")]} ',
                '{[this.getHighlightedValue(values, "address_postal_code")]}',
                '<br />',
                '{[this.getHighlightedValue(values, "address_country")]}',
            '</div>',
        '</tpl>',
        {
          getHighlightedValue: function(data, field) {
            var value = data[field],
                highlight = data.highlight || {},
                edgeNGram = Ext.String.format('{0}.edge_ngram', field)
                highlightedValue = highlight[field] || highlight[edgeNGram];

            return highlightedValue || value;
          }
        }
    ],

    itemSelector: 'div',

    bind: {
      store: '{Clients}'
    }

});
