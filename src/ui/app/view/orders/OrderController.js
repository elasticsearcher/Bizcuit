Ext.define('Bizcuit.view.orders.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orders-order',

    requires: [
        'Bizcuit.model.OrderItem'
    ],

    onCancel: function() {
    	Ext.History.back();
    },

    onSave: function(button) {
    	var form = button.up('form'),
    		record = form.getRecord(),
    		me = this,
            clientCombo = this.lookupReference('clientCombo'),
            itemsStore = this.lookupReference('itemsGrid').getStore();

        // Process items for submission
        var items = itemsStore.getRange().map(function(item) {
            var data = item.getData();
            // Items will get assigned IDs on the backend
            delete data.id;
            // These fields are used for display only
            delete data.item_total;
            delete data.sku_name;
            return data;
        })

    	form.updateRecord();

        record.set('client_id', clientCombo.getSelection().get('id'));
        record.set('items', items);

    	record.save({
    		success: function(record) {
    			me.redirectTo('orders');
    			Ext.GlobalEvents.fireEvent('orderUpdated', record);
    		},

    		failure: function(err) {
    			Ext.MessageBox.alert('Error!', 'Could not save order.');
    			console.log(err);
    		}
    	});
    },

    setOrder: function(order) {
        var view = this.getView(),
            itemsGrid = view.down('grid'),
            itemsStore = itemsGrid.getStore(),
            clientCombo = this.lookupReference('clientCombo');

        clientCombo.select(order.get('client_id'));
        itemsStore.removeAll();
        itemsStore.setData(order.get('items'));
    },

    onAddOrderItem: function() {
        var rec = new Bizcuit.model.OrderItem({
            sku_type: 'service',
            quantity: 1
        }),
        grid = this.lookupReference('itemsGrid');

        grid.getStore().insert(0, rec);

        grid.plugins[0].startEditByPosition({
            row: 0,
            column: 0
        });
    },

    control: {
        'grid': {
            'edit': 'onEdit'
        }
    },

    onEdit: function(editor, context, eOpts) {
        //debugger;
    }
});
