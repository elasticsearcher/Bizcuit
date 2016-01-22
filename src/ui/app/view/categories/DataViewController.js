Ext.define('Bizcuit.view.categories.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categories-dataview',

    onUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
        //Ext.getStore('Categories').reload();
    },

    listen: {
        global: {
            'categoryUpdated': 'onUpdated'
        }
    }
    
});
