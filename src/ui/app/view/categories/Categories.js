
Ext.define("Bizcuit.view.categories.Categories",{
    extend: "Bizcuit.view.base.ModelManager",

    requires: [
        "Bizcuit.view.categories.CategoriesController",
        "Bizcuit.view.categories.CategoriesModel"
    ],

    model: 'Bizcuit.model.Category',

    glyphs: {
        'new': 'xf114@FontAwesome'
    },

    getModelNamePlural: function() {
        return 'categories';
    }

    // controller: "categories-categories",
    // viewModel: {
    //     type: "categories-categories"
    // }
});
