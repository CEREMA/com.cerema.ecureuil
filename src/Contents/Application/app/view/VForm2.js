App.view.define('VForm2', {
    extend: "Ext.window.Window",
    alias: "widget.TForm2",
    initComponent: function() {
        this.width = 1024;
        this.height = 860;
        this.title = "Consultation Appel d'offre";
        this.bodyCls = "white";
        this.items = [
        ];
        this.bbar = [{
                xtype: "button",
                text: "Annuler",
                itemId: "CANCEL_lien"
            },
            '->', 
            {
                xtype: "button",
                itemId: "ajouter_favoris",
                text: "Ajouter aux favoris",
                hidden: true,
                margin: {
                    top: 10,
                    left: 10
                }
            },
            {
                xtype: "button",
                itemId: "effacer_saisie",
                text: "Effacer",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 10,
                    right: 0
                }
            }, 
            {
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