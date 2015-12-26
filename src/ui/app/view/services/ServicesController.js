Ext.define('Bizcuit.view.services.ServicesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.services-services',

    requires: [
        'Bizcuit.model.Service',
        'Bizcuit.view.services.Service'
    ],

    onNewServiceClick: function(button, e, eOpts) {
        this.redirectTo('services/new');
    }
});
