
Ext.define("Bizcuit.view.products.Products",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.products.ProductsController",
        "Bizcuit.view.products.ProductsModel"
    ],

    controller: "products-products",
    viewModel: {
        type: "products-products"
    },

    html: "<h1>Products</h1>"
});
