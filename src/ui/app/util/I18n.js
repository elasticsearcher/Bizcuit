Ext.define('Bizcuit.util.I18n', {
    singleton: true,
    
    getLocale: function() {
        // Extract the locale from the path
        return window.location.pathname.split('/')[1];
    }
});
