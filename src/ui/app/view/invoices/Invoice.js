
Ext.define("Bizcuit.view.invoices.Invoice", {
    extend: "Bizcuit.view.base.ModelView",

    requires: [
        "Bizcuit.view.invoices.InvoiceController",
        "Bizcuit.view.invoices.InvoiceModel",
        "Bizcuit.model.InvoiceItem",
        "Ext.grid.plugin.CellEditing",
        "Bizcuit.store.ServicesCatalog"
    ],

    controller: "invoices-invoice",
    
    viewModel: {
        type: "invoices-invoice"
    },

    model: 'Bizcuit.model.Invoice',

    config: {
        invoice: null
    },

    layout: 'fit',

    setInvoice: function(invoice) {
        this.invoice = invoice;
        this.getController().setInvoice(invoice);
    },

    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    padding: 10,
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            reference: 'clientCombo',
                            fieldLabel: 'Client',
                            displayField: 'full_name',
                            store: 'ClientsDirectory',
                            queryMode: 'local',
                            anchor: '30%',
                            editable: false,
                            valueField: 'id'
                        },
                        {
                            xtype: 'container',
                            layout: 'fit',
                            bodyPadding: 5,

                            anchor: '100%',

                            items: [
                                {
                                    xtype: 'container',

                                    items: [{
                                        xtype: 'gridpanel',
                                        reference: 'itemsGrid',

                                        store: new Ext.data.Store({
                                            model: Bizcuit.model.InvoiceItem,
                                            proxy: {
                                                type: 'memory',
                                                reader: {
                                                    type: 'array'
                                                }
                                            }
                                        }),

                                        plugins: [
                                            new Ext.grid.plugin.CellEditing({
                                                clicksToEdit: 1
                                            })
                                        ],

                                        columns: [
                                            {
                                                text: 'Name',
                                                flex: 1,
                                                dataIndex: 'sku_id',
                                                editor: new Ext.form.field.ComboBox({
                                                    triggerAction: 'all',
                                                    store: Ext.getStore('ServicesCatalog'),
                                                    queryMode: 'local',
                                                    displayField: 'name',
                                                    valueField: 'id',
                                                    editable: false,
                                                    listeners: {
                                                        select: function(combobox, record) {
                                                            var grid = combobox.up('grid'),
                                                                invoiceItem = grid.getSelection()[0];

                                                                invoiceItem.set('unit_price', record.get('price'));
                                                        }
                                                    }
                                                }),

                                                renderer: function(value, metaData, record) {
                                                    var store = Ext.getStore('ServicesCatalog'),
                                                        service = store.getById(value);
                                                    if(service) return service.get('name');

                                                    return '';
                                                }
                                            },
                                            {
                                                text: 'Unit Price',
                                                dataIndex: 'unit_price',
                                                width: 100,
                                                editor: {
                                                    xtype: 'numberfield',
                                                    allowBlank: false,
                                                    minValue: 0,
                                                    maxValue: 100000
                                                }
                                            },
                                            {
                                                text: 'Quantity',
                                                dataIndex: 'quantity',
                                                width: 100,
                                                editor: {
                                                    xtype: 'numberfield',
                                                    allowBlank: false,
                                                    minValue: 0,
                                                    maxValue: 100000
                                                }
                                            },
                                            {
                                                text: 'Item Total',
                                                dataIndex: 'item_total',
                                                width: 100,
                                                renderer: function (value, metaData, record) {
                                                    return record.get('quantity') * record.get('unit_price');
                                                }
                                            },
                                            {
                                                text: 'Delivery Date',
                                                width: 200,
                                                dataIndex: 'scheduled_delivery_date',
                                                renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                                                editor: {
                                                    xtype: 'datefield',
                                                    format: 'Y-m-d',
                                                    editable: false
                                                }
                                            }

                                        ]
                                    },
                                    {
                                        xtype: 'toolbar',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: 'Add Invoice Item',
                                                handler: 'onAddInvoiceItem'
                                            }
                                        ]
                                    }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            reference: 'noteField',
                            fieldLabel: 'Note',
                            name: 'note',
                            anchor: '100%',
                            margin: '10 0 0 0'
                        }
                    ]
                }
            ]
        })

        this.callParent(arguments);
    }
});
