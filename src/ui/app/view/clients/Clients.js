
Ext.define("Bizcuit.view.clients.Clients",{
    extend: "Bizcuit.view.base.ModelManager",

    requires: [
        'Bizcuit.view.clients.DataView'
    ],

    model: "Bizcuit.model.Client",

    glyphs: {
        'new': 'xf234@FontAwesome'
    }
});
