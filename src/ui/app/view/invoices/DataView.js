
Ext.define("Bizcuit.view.invoices.DataView",{
    extend: "Ext.view.View",

    xtype: 'invoices-dataview',

    requires: [
        "Bizcuit.view.invoices.DataViewController",
        "Bizcuit.view.invoices.DataViewModel"
    ],

    controller: "invoices-dataview",
    viewModel: {
        type: "invoices-dataview"
    },

    cls: 'dataview-container',

    tpl: [
        '<tpl for=".">',
            '<div class="shadow-panel invoice-tile">',
                '<span class="client">Client: <a href="#clients/{client_id}">{[this.getClientName(values.client_id)]}</a></span>',
                '<div>',
                '<h4>Items:</h4>',
                '<table>',
                '<thead><tr><th>Name</th><th>Quantity</th><th>Unit Price</th><th>Item Total</th><th>Scheduled Delivery Date</th></tr></thead>',
                '<tpl for="items">',
                    '<tr>',
                    '{[this.fetchSku(values.sku_type, values.sku_id)]}',
                    '<td>{[this.sku.name]}</td>',
                    '<td>{quantity}</td>',
                    '<td class="number">{[this.formatCurrency(values.unit_price)]}</td>',
                    '<td class="number">{[this.formatCurrency(values.unit_price * values.quantity)]}</td>',
                    '<td>{scheduled_delivery_date:date("Y-m-d")}</td>',
                    '</tr>',
                '</tpl>',
                '<tfoot>',
                '<tr>',
                '<td colspan=3>Total</td>',
                '<td class="number">{[this.formatCurrency(this.getTotal(values))]}</td>',
                '<td></td>',
                '</tr>',
                '</tfoot>',
                '</table>',
                '</div>',
                '<p><i>NOTE: {[this.getHighlightedValue(values, "note")]}</i></p>',
                '<span><a href="#invoices/{id}">edit</a></span>',
            '</div>',
        '</tpl>',
        {
            getHighlightedValue: function(data, field) {
                // FIXME: refactor highlighter functions in all dataviews
                var value = data[field],
                    highlight = data.highlight || {},
                    edgeNGram = Ext.String.format('{0}.edge_ngram', field),
                    highlightedValue = highlight[field] || highlight[edgeNGram];

                return highlightedValue || value;
            },

            formatCurrency: Ext.util.Format.currency,

            getClientName: function(clientId) {
                var store = Ext.getStore('ClientsDirectory'),
                    record = store.getById(clientId);

                if(!record) {
                    return 'Client not found.';
                }

                return record.get('first_name') + ' ' + record.get('last_name');
            },

            fetchSku: function(skuType, skuId) {
                var store = null;

                switch(skuType) {
                    case 'service':
                        store = Ext.getStore('ServicesCatalog');
                        break;
                }
                
                if(!store) {
                    this.sku = { name: 'Catalog not found.'};
                    return '';
                }

                var sku = store.getById(skuId);
                if(!sku) {
                    this.sku = { name: 'SKU not found.'};
                    return '';
                };

                this.sku = sku.getData();
                
                return '';
            },

            getTotal: function(values) {
                var runningTotal = 0;
                Ext.Array.each(values.items, function(item) {
                    runningTotal += item.unit_price * item.quantity;
                });
                return runningTotal;
            }
        }
    ],

    itemSelector: 'div.invoice-tile',

    bind: {
      store: '{Invoices}'
    }
});
