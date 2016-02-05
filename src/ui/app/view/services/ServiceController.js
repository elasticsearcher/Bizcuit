Ext.define('Bizcuit.view.services.ServiceController', {
    extend: 'Bizcuit.view.base.ModelViewController',
    alias: 'controller.services-service',
    
    requires: [
        'Bizcuit.store.Categories'
    ],
    
    initViewModel: function(viewModel) {
    	var stores = {
            Categories: Ext.create('Bizcuit.store.Categories')
        };
        
        viewModel.setStores(stores);
        this.callParent(arguments);
    }

});
