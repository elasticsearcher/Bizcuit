/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Bizcuit.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Bizcuit.view.main.MainController',
        'Bizcuit.view.main.MainModel',
        'Bizcuit.view.navigation.Panel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
      {
        xtype: 'panel',
        region: 'north',
        glyph: 'xf1e3@FontAwesome',
        bind: {
          title: '{title}'
        }
      },
      {
        xtype: 'navigation-panel',
        region: 'center'
        // tbar: [{
        //   text: 'Toolbar Button',
        //   handler: 'onClickButton'
        // }]
      }
    ]
});
