
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
                'Name: <b>{[this.getHighlightedValue(values, "name")]}</b> <br />',
                'Email: {[this.getHighlightedValue(values, "email")]} <br />',
                'Note: {[this.getHighlightedValue(values, "note")]} <br />',
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
