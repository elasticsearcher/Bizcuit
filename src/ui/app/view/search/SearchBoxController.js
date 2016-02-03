Ext.define('Bizcuit.view.search.SearchBoxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-searchbox',

    onSearchTextFieldKeydown: function(textfield, e, eOpts) {
      if(e.getKey() == e.ENTER) {
        var query = textfield.getValue(),
            params = { query: query.trim() },
            store = Ext.getStore('SearchResults'),
            proxy = store.getProxy();
            
        proxy.setExtraParams(params);
        store.load();
        this.redirectTo('#search');
      }
    }
});
