
Ext.define("Bizcuit.view.main.Viewport",{
    extend: "Ext.container.Viewport",

    xtype: 'mainviewport',

    requires: [
        "Bizcuit.view.main.ViewportController",
        "Bizcuit.view.main.ViewportModel",
        'Ext.list.Tree',
        'Bizcuit.view.search.SearchBox',
        'Bizcuit.store.ServicesCatalog',
        'Bizcuit.view.orders.Order',
        'Bizcuit.view.orders.Orders',
        'Bizcuit.view.clients.Clients',
        'Bizcuit.view.clients.Client',
        'Bizcuit.view.services.Services',
        'Bizcuit.view.services.Service',
        'Bizcuit.view.search.Results',
        'Bizcuit.view.search.DataView',
        'Bizcuit.view.categories.Categories'
    ],

    controller: "main-viewport",
    viewModel: {
        type: "main-viewport"
    },

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'bizcuitLogo',
                    cls: 'bizcuit-logo',
                    html: '<div class="main-logo"><img src="resources/images/logo-small-3.png">Bizcuit</div>',
                    width: 250
                },
                {
                    margin: '0 13 0 8',
                    cls: 'delete-focus-bg',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                {
                    xtype: 'search-searchbox',
                    flex: 1
                },
                {
                    xtype: 'tbtext',
                    text: 'Good to see you, boss!',
                    cls: 'top-user-name'
                }
                // ,
                // {
                //     cls: 'delete-focus-bg',
                //     iconCls:'x-fa fa-th-large',
                //     href: '#profile',
                //     hrefTarget: '_self',
                //     tooltip: 'Not implemented'
                // }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
