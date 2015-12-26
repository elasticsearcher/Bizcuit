Ext.define('Bizcuit.view.clients.ClientController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clients-client',

    onCancel: function() {
    	Ext.History.back();
    },

    onSave: function(button) {
    	var view = this.getView(),
    		form = view.getForm(),
    		record = view.getRecord(),
    		me = this;

    	//form.updateRecord();

    	record.set(form.getValues());

    	record.save({
    		success: function(record) {
    			me.redirectTo('clients');
    			Ext.GlobalEvents.fireEvent('clientUpdated', record);
    		},

    		failure: function(err) {
    			Ext.MessageBox.alert('Error!', 'Could not save client.');
    			console.log(err);
    		}
    	});
    }
    
});
