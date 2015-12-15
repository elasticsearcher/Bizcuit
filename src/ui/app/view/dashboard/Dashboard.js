
Ext.define("Bizcuit.view.dashboard.Dashboard",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.dashboard.DashboardController",
        "Bizcuit.view.dashboard.DashboardModel"
    ],

    controller: "dashboard-dashboard",
    viewModel: {
        type: "dashboard-dashboard"
    },

    html: "<h1>Dashboard</h1>"
});
