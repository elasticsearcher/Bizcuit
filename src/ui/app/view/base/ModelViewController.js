Ext.define('Bizcuit.view.base.ModelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.base-modelview',

    onCancel: function() {
    	Ext.History.back();
    },

    onSave: function(button) {
    	var view = this.getView(),
    		form = view.getForm(),
    		record = view.getRecord(),
    		me = this,
    		modelName = view.getModelName().toLowerCase();

    	record.set(form.getValues());

    	record.save({
    		success: function(record) {
    			me.redirectTo(view.getModelNamePlural());
    			Ext.GlobalEvents.fireEvent(modelName + 'Updated', record);
    		},

    		failure: function(err) {
    			Ext.MessageBox.alert('Error!', 'Could not save ' + modelName + '.');
    			console.log(err);
    		}
    	});
    }
    
});