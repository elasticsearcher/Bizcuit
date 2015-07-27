
Ext.define("Bizcuit.view.clients.DataView",{
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

    tpl: [
        '<tpl for=".">',
            '<div class="">',
                '<b>{[this.getHighlightedValue(values, "first_name")]} \
                {[this.getHighlightedValue(values, "last_name")]}</b> <br />',
                'Email: {[this.getHighlightedValue(values, "email")]} <br />',
                'Phone: {[this.getHighlightedValue(values, "phone")]} <br />',
                '<br />',
                'Note: {[this.getHighlightedValue(values, "note")]} <br />',
                '<br />',
                'Address: <br />',
                '{[this.getHighlightedValue(values, "address_number")]} ',
                '{[this.getHighlightedValue(values, "address_street")]} ',
                '<br />',
                '{[this.getHighlightedValue(values, "address_suite")]} ',
                '<br />',
                '{[this.getHighlightedValue(values, "address_city")]} ',
                '{[this.getHighlightedValue(values, "address_postal_code")]}',
                '<br />',
                '{[this.getHighlightedValue(values, "address_country")]}',
                '<br />',
                '<br />',
            '</div>',
        '</tpl>',
        {
          getHighlightedValue: function(data, field) {
            var value = data[field],
                highlight = data.highlight;

            if(highlight && highlight[field]) {
              value = highlight[field];
            }
            return value;
          }
        }
    ],

    itemSelector: 'div',

    bind: {
      store: '{Clients}'
    }

});
