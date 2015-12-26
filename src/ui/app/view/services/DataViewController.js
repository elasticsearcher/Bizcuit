Ext.define('Bizcuit.view.services.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.services-dataview',

    onServiceUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
    },

    listen: {
        global: {
            'serviceUpdated': 'onServiceUpdated'
        }
    },
    
});
