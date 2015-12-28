
Ext.define("Bizcuit.view.search.DataView",{
    extend: "Ext.view.View",

    requires: [
        "Bizcuit.view.search.DataViewController",
        "Bizcuit.view.search.DataViewModel"
    ],

    xtype: 'search-dataview',

    controller: "search-dataview",
    viewModel: {
        type: "search-dataview"
    },

    cls: 'dataview-container',

    tpl: [
        '<tpl for=".">',
            '<tpl if=\'values._type == "client"\'>',
                '<div class="shadow-panel client-tile tile">',
                    '<b>{[this.getHighlightedValue(values, "first_name")]} \
                    {[this.getHighlightedValue(values, "last_name")]}</b> <br />',
                    'Email: {[this.getHighlightedValue(values, "email")]} <br />',
                    'Phone: {[this.getHighlightedValue(values, "phone")]} <br />',
                    '<br />',
                    'Note: {[this.getHighlightedValue(values, "note")]} <br />',
                    '<br />',
                    'Address: <br />',
                    '{[this.getHighlightedValue(values, "address.address1")]} ',
                    '<br />',
                    '{[this.getHighlightedValue(values, "address.address2")]} ',
                    '<br />',
                    '{[this.getHighlightedValue(values, "address.city")]} ',
                    '{[this.getHighlightedValue(values, "address.postal_code")]}',
                    '<br />',
                    '{[this.getHighlightedValue(values, "address.country")]} <br />',
                    '<span><a href="#clients/{[values._id]}">edit</a></span>',
                '</div>',
            '<tpl elseif=\'values._type == "service"\'>',
                '<div class="shadow-panel service-tile tile">',
                    '<b>{[this.getHighlightedValue(values, "name")]}</b> <br />',
                    '${[this.getHighlightedValue(values, "price")]}',
                    '<p>{[this.getHighlightedValue(values, "description")]}</p>',
                    '<span><a href="#services/{_id}">edit</a></span>',
                '</div>',
            '<tpl elseif=\'values._type == "order"\'>',
                '<div class="shadow-panel order-tile tile">',
                    '<span class="client">Client: <a href="#clients/{[values._source.client_id]}">{[this.getClientName(values._source.client_id)]}</a></span>',
                    '<div>',
                    '<h4>Items:</h4>',
                    '<table>',
                    '<thead><tr><th>Name</th><th>Quantity</th><th>Unit Price</th><th>Item Total</th><th>Scheduled Delivery Date</th></tr></thead>',
                    '<tpl for="values._source.items">',
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
                    '<td class="number">{[this.formatCurrency(this.getTotal(values._source))]}</td>',
                    '<td></td>',
                    '</tr>',
                    '</tfoot>',
                    '</table>',
                    '</div>',
                    '<p><i>NOTE: {[this.getHighlightedValue(values, "note")]}</i></p>',
                    '<span><a href="#orders/{_id}">edit</a></span>',
                '</div>',
            '</tpl>',
        '</tpl>',
        {
            get: function(values, field) {
                return values._source[field];
            },
            getHighlightedValue: function(data, field) {

                function accessByPath(obj, path) {
                    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++){
                        obj = obj[path[i]];
                    };
                    return obj;
                };

                var value = accessByPath(data._source, field),
                    highlight = data.highlight || {},
                    edgeNGram = Ext.String.format('{0}.edge_ngram', field)
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

    itemSelector: 'div.tile',

    store: Ext.getStore('SearchResults')
});
