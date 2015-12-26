Ext.define('Bizcuit.view.services.ServiceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.services-service',

    onCancel: function() {
    	Ext.History.back();
    },

    onSave: function(button) {
    	var form = button.up('form'),
    		record = form.getRecord(),
    		me = this;

    	form.updateRecord();

    	record.save({
    		success: function(record) {
    			me.redirectTo('services');
    			Ext.GlobalEvents.fireEvent('serviceUpdated', record);
    		},

    		failure: function(err) {
    			Ext.MessageBox.alert('Error!', 'Could not save service.');
    			console.log(err);
    		}
    	});
    }

});
