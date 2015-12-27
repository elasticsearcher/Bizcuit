
Ext.define("Bizcuit.view.orders.Orders",{
    extend: "Ext.container.Container",

    requires: [
        "Bizcuit.view.orders.OrdersController",
        "Bizcuit.view.orders.OrdersModel",
        "Bizcuit.view.orders.DataView"
    ],

    controller: "orders-orders",
    viewModel: {
        type: "orders-orders"
    },

    layout: {
      type: 'vbox'
    },

    items: [
      {
        xtype: 'toolbar',
        cls: 'shadow-panel',
        width: '100%',
        items: [
          {
            xtype: 'button',
            text: 'New Order',
            glyph: 'xf067@FontAwesome',
            scale: 'medium',
            listeners: {
              click: 'onNewOrderClick'
            }
          }
        ]
      },
      {
        xtype: 'container',
        flex: 1,
        width: '100%',
        layout: 'fit',
        overflowY: 'auto',
        items: [
          {
            xtype: 'orders-dataview'
          }
        ]
      }
    ]
});
