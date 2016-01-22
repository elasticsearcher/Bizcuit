
Ext.define("Bizcuit.view.categories.DataView",{
    extend: "Ext.view.View",

    requires: [
        "Bizcuit.view.categories.DataViewController",
        "Bizcuit.view.categories.DataViewModel"
    ],

    xtype: 'categories-dataview',

    controller: "categories-dataview",
    viewModel: {
        type: "categories-dataview"
    },

    cls: 'dataview-container',

    tpl: [
        '<tpl for=".">',
            '<div class="shadow-panel category-tile">',
                '<b>{name}</b> <br />',
                '<p>{description}</p>',
                '<span><a href="#categories/{id}">edit</a></span>',
            '</div>',
        '</tpl>'
    ],

    itemSelector: 'div',

    bind: {
        store: '{Categories}'
    }
});
