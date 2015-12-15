
Ext.define("Bizcuit.view.categories.Categories",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.categories.CategoriesController",
        "Bizcuit.view.categories.CategoriesModel"
    ],

    controller: "categories-categories",
    viewModel: {
        type: "categories-categories"
    },

    html: "<h1>Categories</h1>"
});
