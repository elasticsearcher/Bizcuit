Ext.define('Bizcuit.view.services.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.services-dataview',

    onServiceUpdated: function(record) {
    	var store = this.getView().getStore();
    	store.reload();
    },

    onCategoryUpdated: function(record) {
        var me = this;
        me.getViewModel().getStore('Categories').reload({
            callback: function() {
                me.onServiceUpdated();
            }
        });
    },

    listen: {
        global: {
            'serviceUpdated': 'onServiceUpdated',
            'categoryUpdated': 'onCategoryUpdated'
        }
    }
    
});
