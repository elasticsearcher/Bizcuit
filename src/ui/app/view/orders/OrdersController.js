Ext.define('Bizcuit.view.orders.OrdersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orders-orders',

    onNewOrderClick: function(button, e, eOpts) {
        this.redirectTo('orders/new');
    }
});