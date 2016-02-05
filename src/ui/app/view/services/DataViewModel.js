Ext.define('Bizcuit.view.services.DataViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.services-dataview',

    requires: [
    	'Bizcuit.store.Categories'
    ],

    data: {
        name: 'Bizcuit'
    }
});
