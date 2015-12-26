Ext.define('Bizcuit.view.main.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-viewport',

    requires: [
        'Bizcuit.model.Client',
        'Bizcuit.model.Service'
    ],

    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange',
        'clients/:id': 'onClientId',
        'services/:id': 'onServiceId'
    },

    setCurrentView: function(hashTag, viewName, config) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            viewModel = me.getViewModel(),
            vmData = viewModel.getData(),
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag),
            view = node ? node.get('view') : (viewName ? viewName : null),
            lastView = vmData.currentView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            newView = Ext.create('Bizcuit.view.' + (view || 'pages.Error404Window'), Ext.apply({
                hideMode: 'offsets',
                routeId: hashTag
            }));
        } else {
            if(config) {
                existingItem.setConfig(config);
            }
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        vmData.currentView = newView;
        return newView;
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        if (node && node.get('view')) {
            this.redirectTo( node.get("routeId"));
        }
    },

    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.navigationTreeList,
            wrapContainer = refs.mainContainerWrap,
            collapsing = !navigationList.getMicro(),
            newWidth = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();

            refs.bizcuitLogo.setWidth(newWidth);

            navigationList.setWidth(newWidth);
            navigationList.setMicro(collapsing);

            Ext.resumeLayouts(); // do not flush the layout here...

            // No animation for IE9 or lower...
            wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            wrapContainer.updateLayout();  // ... since this will flush them
        }
        else {
            if (!collapsing) {
                // If we are leaving micro mode (expanding), we do that first so that the
                // text of the items in the navlist will be revealed by the animation.
                navigationList.setMicro(false);
            }

            // Start this layout first since it does not require a layout
            refs.bizcuitLogo.animate({dynamic: true, to: {width: newWidth}});

            // Directly adjust the width config and then run the main wrap container layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            navigationList.width = newWidth;
            wrapContainer.updateLayout({isRoot: true});

            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                    },
                    single: true
                });
            }
        }
    },

    onMainViewRender:function() {
        if (!window.location.hash) {
            this.redirectTo("dashboard");
        }
    },

    onRouteChange: function(id){
        this.setCurrentView(id);
    },

    onSearchRouteChange: function () {
        this.setCurrentView('search');
    },

    onEmailRouteChange: function () {
        this.setCurrentView('email');
    },

    onClientId: function(id) {
        var viewName = 'clients.Client',
            record = null,
            me = this,
            view = null;

        function setAddressValues(form, record) {
            // FIXME: find a better way to set mapped values
            var address = record.get('address');
            if(!address) {
                return;
            }
            var values = {
                'address_address1': address.address1,
                'address_address2': address.address2,
                'address_city': address.city,
                'address_postal_code': address.postal_code,
                'address_province': address.province,
                'address_country': address.country
            };
            form.setValues(values);
        }

        if(id == 'new') {
            record = Ext.create('Bizcuit.model.Client', {
                id: id
            });

            view = this.setCurrentView(viewName, viewName);
            view.loadRecord(record);
        } else {
            Bizcuit.model.Client.load(id, {
                success: function(record) {
                    view = me.setCurrentView(viewName, viewName);
                    view.loadRecord(record);
                    //view.originalRecord = record;
                    //view.getForm().setValues(record.getData());
                    //setAddressValues(view.getForm(), record);
                }
            })
        }
    },

    onServiceId: function(id) {
        var viewName = 'services.Service',
            record = null,
            me = this,
            view = null;

        if(id == 'new') {
            record = Ext.create('Bizcuit.model.Service', {
                id: id
            });

            view = this.setCurrentView(viewName, viewName);
            view.loadRecord(record);
        } else {
            Bizcuit.model.Service.load(id, {
                success: function(record) {
                    view = me.setCurrentView(viewName, viewName);
                    view.loadRecord(record);
                }
            })
        }
    }

});
