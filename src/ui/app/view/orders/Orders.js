
Ext.define("Bizcuit.view.orders.Orders",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.orders.OrdersController",
        "Bizcuit.view.orders.OrdersModel"
    ],

    controller: "orders-orders",
    viewModel: {
        type: "orders-orders"
    },

    html: "<h1>Orders</h1>"
});
