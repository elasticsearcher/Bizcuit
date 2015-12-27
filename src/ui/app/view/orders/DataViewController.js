Ext.define('Bizcuit.view.orders.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orders-dataview',

    onOrderUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
    },

    listen: {
        global: {
            'orderUpdated': 'onOrderUpdated',
            'serviceUpdated': 'onOrderUpdated'
        }
    }
    
});