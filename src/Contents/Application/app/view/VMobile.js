App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.TMobile",
    initComponent: function() {
        this.width = 800;
        this.height = 750;
        this.title = "Ajouter un appel d'offre";
        this.bodyCls = "white";
        this.items = [
	            {
	                layout: "hbox",
	                border: false,
	                width: "100%",
	                items: [{
	                        xtype: "combo",
	                        itemId: "cboType",
	                        margin: {
	                            top: 10,
	                            left: 10

	                        },
	                        fieldLabel: "Type de consultation",
	                        allowBlank: false,
	                        editable: false,
	                        labelAlign: "top",
	                        labelWidth: 200,
	                        width: 200,
	                        displayField: "reponse",
	                        valueField: "IdConsultation",

	                        store: App.store.create('App.AO.getAll3', // Creation du store
	                            {
	                                autoLoad: true
	                            })

	                    }, {
	                        xtype: "textfield",
	                        itemId: "client",
	                        margin: {
	                            top: 10,
	                            left: 30,
	                            right: 10
	                        },
	                        flex: 1,
	                        labelAlign: "top",
	                        allowBlank: false,
	                        fieldLabel: "Client",
	                        labelWidth: 200,
	                    },

	                ]
	            }					
			]
		}

});