
Ext.define("Bizcuit.view.base.ModelManager",{
    extend: "Ext.container.Container",

    requires: [
        "Bizcuit.view.base.ModelManagerController",
        "Bizcuit.view.base.ModelManagerModel"
    ],

    controller: "base-modelmanager",
    viewModel: {
        type: "base-modelmanager"
    },

    layout: {
      type: 'vbox'
    },

    config: {
        model: ''
    },

    glyphs: {
        'new': 'xf067@FontAwesome'
    },

    getModelName: function() {
        if(!this.modelName) {
            this.modelName = this.model.substring(this.model.lastIndexOf('.') + 1).toLowerCase();
        }
        return this.modelName;
    },

    getModelNamePlural: function() {
        return this.getModelName() + 's';
    },

    getStoreName: function() {
        var modelNamePlural = this.getModelNamePlural();
        return modelNamePlural.charAt(0).toUpperCase() + modelNamePlural.slice(1);
    },

    initComponent: function() {
        this.items = [
            {
                xtype: 'toolbar',
                cls: 'shadow-panel',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        text: 'New ' + this.getModelName(),
                        glyph: this.glyphs['new'],
                        scale: 'medium',
                        listeners: {
                            click: 'onNewClick'
                        }
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                width: '100%',
                layout: 'fit',
                overflowY: 'auto',
                items: [
                    {
                        xtype: this.getModelNamePlural() + '-dataview'
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});
