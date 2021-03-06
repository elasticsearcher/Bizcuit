Ext.define('Bizcuit.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text:   'Search',
                view:   'search.Results',
                leaf:   true,
                iconCls: 'x-fa fa-search',
                routeId: 'search'
            },
            // {
            //     text:   'Dashboard',
            //     view:   'dashboard.Dashboard',
            //     leaf:   true,
            //     iconCls: 'right-icon new-icon x-fa fa-desktop',
            //     routeId: 'dashboard'
            // },
            // {
            //     text:   'Notifications',
            //     view:   'notifications.Notifications',
            //     iconCls: 'right-icon hot-icon x-fa fa-send ',
            //     leaf:   true,
            //     routeId: 'notifications'
            //
            // },
            {
                text:   'Clients',
                view:   'clients.Clients',
                leaf:   true,
                iconCls: 'x-fa fa-user',
                routeId:'clients'
            },
            {
                text:   'Invoices',
                view:   'invoices.Invoices',
                leaf:   true,
                iconCls: 'x-fa fa-edit',
                routeId:'invoices'
            },
            {
                text: 'Inventory',
                expanded: true,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                id:       'inventory',
                children: [
                    {
                        text: 'Categories',
                        view: 'categories.Categories',
                        leaf: true,
                        iconCls: 'x-fa fa-folder-o',
                        routeId:'categories'
                    },
                    // {
                    //     text: 'Products',
                    //     view: 'products.Products',
                    //     leaf: true,
                    //     iconCls: 'x-fa fa-rocket',
                    //     routeId:'products'
                    // },
                    {
                        text: 'Services',
                        view: 'services.Services',
                        leaf: true,
                        iconCls: 'x-fa fa-wrench',
                        routeId:'services'
                    }
                ]
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
