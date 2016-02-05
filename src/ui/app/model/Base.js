Ext.define('Bizcuit.model.Base', {
    extend: 'Ext.data.Model',
    
    requires: [ 'Bizcuit.util.I18n' ],

    constructor: function() {
        this.callParent(arguments);
        this.getProxy().setExtraParam('locale', Bizcuit.util.I18n.getLocale());
    }
    
});