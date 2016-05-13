App.view.define('VForm4', {
    extend: "Ext.window.Window",
    width: 465,
    height: 410,
    title: "Notification Groupe",
    alias: "widget.TForm4",
    layout: "fit",
    items: [

        {
            xtype: "grid",
            itemId: "grid3",
            columns: [{
                    text: "Nom groupe",
                    width: 120,
                    flex: 1,
                    dataIndex: "LibUnic",

                },

            ],
            store: App.store.create('App.AO.getUnites', // Creation du store
                {
                    autoLoad: true
                })


        }
    ],
    bbar: [{
            xtype: "button",
            text: "Annuler",
            itemId: "annuler2"
        },
        '->', {
            xtype: "button",
            text: "Valider",
            itemId: "ajouter2"

        }
    ],
});