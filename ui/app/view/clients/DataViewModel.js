Ext.define('Bizcuit.view.clients.DataViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clients-dataview',

    requires: [
      'Bizcuit.model.Client'
    ],

    data: {
        name: 'Bizcuit'
    }
});
