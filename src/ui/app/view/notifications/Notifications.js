
Ext.define("Bizcuit.view.notifications.Notifications",{
    extend: "Ext.panel.Panel",

    requires: [
        "Bizcuit.view.notifications.NotificationsController",
        "Bizcuit.view.notifications.NotificationsModel"
    ],

    controller: "notifications-notifications",
    viewModel: {
        type: "notifications-notifications"
    },

    html: "<h1>Notifications</h1>"
});
