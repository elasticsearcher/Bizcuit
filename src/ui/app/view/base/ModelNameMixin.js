Ext.define('Bizcuit.view.base.ModelNameMixin', {
	getModelName: function() {
        if(!this.modelName) {
            this.modelName = this.model.substring(this.model.lastIndexOf('.') + 1).toLowerCase();
        }
        return this.modelName;
    },

    getModelNamePlural: function() {
        return this.getModelName() + 's';
    },
});