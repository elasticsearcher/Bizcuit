/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Bizcuit.Application', {
    extend: 'Ext.app.Application',

    name: 'Bizcuit',

    requires: ['Bizcuit.util.I18n'],

    stores: [
        'NavigationTree',
        'SearchResults',
        'ClientsDirectory',
        'ServicesCatalog',
        'Categories'
    ],

    models: [
        'Category',
        'Invoice',
        'InvoiceItem'
    ],

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
