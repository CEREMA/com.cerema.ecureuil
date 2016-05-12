App.view.define('VForm2', {
    extend: "Ext.window.Window",
    alias: "widget.TForm2",
    initComponent: function() {
        this.width = 1024;
        this.height = 860;
        this.title = "Consultation Appel d'offre";
        this.bodyCls = "white";
        this.layout = "border";
        this.items = [
            {
                region: "south",
                width: 300,
                layout: "fit",
                border: false,
                items: [
                {
                    layout: "hbox",
                    width: "100%",
                    items: [
                    {
                        xtype: "grid",
                        itemId: "grid1",
                        flex: 1,
                        tbar: [{
                                xtype: "button",
                                text: "Ajouter groupe(s)",
                                itemId: "ajouter_groupe"
                            },
                            {
                                xtype: "button",
                                text: "Ajouter agent(s)",
                                itemId: "ajouter_agent"
                            },
                        ],
                        columns: [{
                                text: "Nom",
                                width: 140,
                                dataIndex: "Nom"
                            }, {
                                text: "Email",
                                width: 185,
                                dataIndex: "Email"
                            }, {
                                text: "Type",
                                dataIndex: "Type",
                                flex: 1
                            },
                        ],
                        flex: 1,
                        height: 160,
                        store: App.store.create({
                            fields: [
                                "Nom",
                                "Email",
                                "Type"
                            ],
                            data: []
                        })
                    },
                    {
                        xtype: "uploadfilemanager",
                        padding: 10,
                        itemId: "up",
                        flex: 1,
                        height: "100%",
                        uploader: '/upload',
                        hidden: false
                    }
                    ]
                }]
            }
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