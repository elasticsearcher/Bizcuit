Ext.define('Bizcuit.view.clients.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clients-dataview',

    onClientUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
        Ext.getStore('ClientsDirectory').reload();
    },

    listen: {
        global: {
            'clientUpdated': 'onClientUpdated'
        }
    }
    
});
