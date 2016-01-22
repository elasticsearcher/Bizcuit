Ext.define('Bizcuit.view.services.ServiceModel', {
    extend: 'Bizcuit.view.base.ModelViewModel',
    alias: 'viewmodel.services-service',

    requires: [
    	'Bizcuit.store.Categories'
    ],

    stores: {
    	Categories: Ext.create('Bizcuit.store.Categories')
    }

});
