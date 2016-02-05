
Ext.define('Bizcuit.store.Base', {
    extend: 'Ext.data.Store',

    requires: [ 'Bizcuit.util.I18n' ],
    
    autoLoad: true,
    autoSync: true,
    
    constructor: function() {
        this.callParent(arguments);
        this.getProxy().setExtraParam('locale', Bizcuit.util.I18n.getLocale());
    }

});
