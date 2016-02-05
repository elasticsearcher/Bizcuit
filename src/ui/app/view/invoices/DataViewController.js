Ext.define('Bizcuit.view.invoices.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.invoices-dataview',

    onInvoiceUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
    },

    listen: {
        global: {
            'invoiceUpdated': 'onInvoiceUpdated',
            'serviceUpdated': 'onInvoiceUpdated'
        }
    }
    
});