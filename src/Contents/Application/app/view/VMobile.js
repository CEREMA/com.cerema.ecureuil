App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.VMobile",
    initComponent: function() {
        this.width = 300;
        this.height = 135;
        this.title = "Ajouter un périphérique";
        this.bodyCls = "white";
        this.items = [
            {
                layout: "hbox",
                border: false,
                width: "100%",
                items: [
            		{
                        xtype: "textfield",
                        itemId: "Peripherique",
                        margin: 10,
                        flex: 1,
                        labelAlign: "top",
                        allowBlank: false,
                        fieldLabel: "Code de synchronisation",
                        labelWidth: 200,
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
                itemId: "synchroniser_code",
                text: "Synchroniser",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 137,
                    right: 0
                }
            }
        ];
        
        this.callParent(arguments);
    }

});

