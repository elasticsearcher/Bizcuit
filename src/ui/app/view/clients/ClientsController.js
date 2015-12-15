Ext.define('Bizcuit.view.clients.ClientsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clients-clients',

    requires: [
      'Bizcuit.model.Client'
    ],

    onNewClientClick: function(button, e, eOpts) {

      var me = this,
          form = Ext.widget('clients.new-client-form');

      Ext.widget('window', {
        modal: true,
        layout: 'fit',
        title: 'New Client',
        items: [
          form
        ],
        buttons: [
          {
            text: 'Submit',
            handler: function submitNewClient() {
              var newClient = Ext.create('Bizcuit.model.Client');
              form.updateRecord(newClient);
              var store = me.getView().getClientsStore();
              store.insert(0, [newClient]);
              this.up('window').destroy();
            }
          },
          {
            text: 'Cancel',
            handler: function() {
              this.up('window').destroy();
            }
          }
        ]
      }).show();

    }
});
