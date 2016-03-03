App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.VMobile",
    initComponent: function() {
        this.width = 600;
        this.height = 600;
        this.title = "Ajouter un périphérique";
        this.bodyCls = "white";
        this.items = [
            {
                layout: "vbox",
                border: false,
                width: "100%",
                items: [
                    {
                        html: '<div>Ecureuil Mobile</div>',
                        flex: 6
                    },
            		{
                        xtype: "textfield",
                        itemId: "Peripherique",
                        margin: 10,
                        flex: 1,
                        labelAlign: "top",
                        allowBlank: false,
                        fieldLabel: "Code de synchronisation",
                        labelWidth: 100,
                    }
				]
            }
        ];
        this.bbar = [
        	{
                xtype: "button",
                itemId: 'CancelMobile',
                text: "Annuler",
                margin: {
                    top: 0,
                    bottom: 0,
                    left: 10,
                    right: 0
                }
            }, 
            {
                xtype: "button",
                itemId: "SynchroniserMobile",
                text: "Synchroniser",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 437,
                    right: 0
                }
            }
        ];
        
        this.callParent(arguments);
    }

});

