App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.VMobile",
    initComponent: function() {
        this.width = 600;
        this.height = 425;
        this.title = "Ajouter un périphérique";
        this.bodyCls = "white";
        this.layout="fit";
        this.items = [
            {
                layout: "vbox",
                border: false,
                items: [
                    {
                        width: "100%",
                        html:   '<div class="screen-mobile">'+
                                    '<div class="title-mobile">Ecureuil Mobile</div>'+
                                    '<div class="description-mobile">Dès aujourd\'hui, Accedez à votre espace Ecureuil sur votre mobile.<br/>En seulement 2 étapes !</div>'+
                                    '<div class="title-step">Etape 1 : Télécharger l\'application "Ecureuil Mobile"</div>'+
                                    '<a href="https://play.google.com/store?hl=fr" target="_blank"><div class="googleplay"></div></a><div class="appstore"></div>'+
                                    '<div class="title-step">Etape 2 : Suivre les instructions sur votre mobile</div>'+
                                    '<div class="text-mobile">Après l\'installation de l\'application,<br/>'+
                                    'Suivez les instruction de synchronisation.<br/>'+
                                    'Cela permettra d\'associer votre compte Ecureuil avec votre application mobile.</div>'+
                                '</div>',
                        flex: 8
                    },
            		{
                        flex: 2,
                        layout: "hbox",
                        width: 600,
                        margin: {
                            top:10
                        },
                        items: [
                            {   
                                xtype: "textfield",
                                itemId: "Peripherique",
                                flex: 3,
                                margin: 10,
                                fieldLabel: "Code de synchronisation",
                                labelWidth: 175,
                                height: 40,
                                labelStyle: 'font-size: 1.2em; margin-top: 13px;',
                                fieldStyle: {
                                    'padding': '10px;',
                                    'fontSize' : '30px'
                                }
                            },
                            {   
                                flex: 2,
                                xtype: 'label',
                                itemId: 'LabelError',
                                text: '',
                                margin: 12,
                                style: {
                                  color: 'red'
                                }
                            }
                        ]
                        
                    }
				]
            }
        ];
        this.bbar = [
        	{
                xtype: "button",
                itemId: 'CancelMobile',
                text: "Fermer",
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

