Ext.define('Bizcuit.view.base.ModelManagerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.base-modelmanager',
    
    requires: [ 'Bizcuit.util.I18n' ],
    
    initViewModel: function(viewModel) {
    	var view = this.getView(),
    		modelNamePlural = view.getModelNamePlural(),
    		storeName = view.getStoreName(),
    		model = view.getModel();

    	var stores = {};
    	stores[storeName] = {
	        model: model,
	        autoLoad: true,
	        autoSync: true,
            proxy: {
                extraParams: {
                    locale: Bizcuit.util.I18n.getLocale()
                },
	            paramsAsJson: false,
	          	limitParam: 'size',
	          	pageParam: undefined,
	          	startParam: 'from',
	          	type: 'rest',
	          	noCache: false,
	          	api: {
		            read: '/api/' + modelNamePlural,
		            create: '/api/' + modelNamePlural
	          	},
	          	actionMethods: {
	            	//read: 'POST'
	          	},
	            reader: {
		            type: 'json',
		            rootProperty: 'hits.hits'
	            }
	        }
		};

		viewModel.setStores(stores);

		this.callParent(arguments);
    },

    onNewClick: function(button, e, eOpts) {
        this.redirectTo(this.getView().getModelNamePlural() + '/new');
    }


});
