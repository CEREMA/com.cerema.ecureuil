App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.TMobile",
    initComponent: function() {
        this.width = 300;
        this.height = 150;
        this.title = "Ajouter un appel d'offre";
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
            }, {
                layout: "hbox",
                width: 400,
                height: 4,
                margin: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                border: false,
                items: [

                ]
            }
        ];
        this.bbar = [{
                xtype: "button",
                text: "Annuler",
                itemId: "CANCEL_lien"
            },
            '->', {
                xtype: "button",
                itemId: "effacer_saisie",
                text: "Effacer",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 196,
                    right: 0
                }
            }, {
                xtype: "button",
                itemId: "valider_saisie",
                text: "Enregistrer",
                margin: {
                    top: 10,
                    left: 10

                }
            }
        ];
        this.callParent(arguments);
    }

});