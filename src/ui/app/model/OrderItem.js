Ext.define('Bizcuit.model.OrderItem', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'string',
            convert: function(val, record) {
                return record.get('sku_type') + ':' + record.get('sku_id');
            }
        },
        {
            name: 'sku_name',
            type: 'string',
            persist: false,
            convert: function(val, record) {
                var store = null,
                    skuType = record.get('sku_type');



                switch(skuType) {
                    case 'service':
                        store = Ext.getStore('ServicesCatalog');
                        break;
                }
                
                if(!store) {
                    return 'Error: Catalog not found.';
                }

                var sku = store.getById(record.get('sku_id'));
                
                if(!sku) {
                    return 'SKU not found.';
                };

                return sku.get('name');
            }
        },
        {
            name: 'item_total',
            type: 'string',
            convert: function(val, record) {
                return record.get('quantity') * record.get('unit_price');
            }
        },
        { name: 'sku_type', type: 'string' },
        { name: 'sku_id', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'unit_price', type: 'number' },
        { name: 'scheduled_delivery_date', type: 'date'}
    ]
    
});
