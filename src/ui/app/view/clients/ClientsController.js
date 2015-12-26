Ext.define('Bizcuit.view.clients.ClientsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clients-clients',

    requires: [
        'Bizcuit.model.Client'
    ],

    onNewClientClick: function(button, e, eOpts) {
        this.redirectTo('clients/new');
    }
});
