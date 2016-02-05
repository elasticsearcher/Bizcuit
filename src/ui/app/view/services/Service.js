
Ext.define("Bizcuit.view.services.Service",{
    extend: "Bizcuit.view.base.ModelView",

    model: 'Bizcuit.model.Service',

    requires: [
        'Bizcuit.view.services.ServiceModel',
        'Bizcuit.view.services.ServiceController'
    ],

    viewModel: {
        type: "services-service"
    },
    
    controller: 'services-service',

    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'Category',
            name: 'category_id',
            displayField: 'name',
            queryMode: 'local',
            anchor: '30%',
            editable: false,
            valueField: 'id',
            bind: {
                store: '{Categories}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name'
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            name: 'description'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Price',
            name: 'price'
        }
    ]
});
