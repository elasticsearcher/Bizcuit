
Ext.define("Bizcuit.view.categories.Category",{
    extend: "Bizcuit.view.base.ModelView",

    model: 'Bizcuit.model.Category',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name'
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            name: 'description'
        }
    ],

    getModelNamePlural: function() {
        return 'categories';
    }
});
