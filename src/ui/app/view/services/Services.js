
Ext.define("Bizcuit.view.services.Services",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.services.ServicesController",
        "Bizcuit.view.services.ServicesModel"
    ],

    controller: "services-services",
    viewModel: {
        type: "services-services"
    },

    html: "<h1>Services</h1>"
});
