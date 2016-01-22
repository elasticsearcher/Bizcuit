
Ext.define("Bizcuit.view.base.ModelView",{
    extend: "Ext.form.Panel",

    requires: [
        "Bizcuit.view.base.ModelViewController",
        "Bizcuit.view.base.ModelViewModel"
    ],

    controller: "base-modelview",
    viewModel: {
        type: "base-modelview"
    },

    mixins: {
        modelName: 'Bizcuit.view.base.ModelNameMixin'
    },

    layout: 'form',

    defaultType: 'textfield',

    initComponent: function() {
        this.title = this.getModelName();
        this.callParent(arguments);
    },

    buttons: [
        {
            text: 'Cancel',
            handler: 'onCancel'
        },
        {
            text: 'Save',
            handler: 'onSave'
        }
    ]
});
