App.view.define('VForm3',{
	extend: "Ext.window.Window",
	width: 610,
	height: 640,
	title: "Notification utilisateurs",
	alias: "widget.TForm3",
    layout: "fit",
	items: [
	{
					layout: "hbox",
					border: false,
					width: "100%",
					items: [
					
					{
					xtype: "grid",
					itemId: "grid2",
                    border: false,
					columns: [
						{
							text: "Nom",
							width: 120,
							dataIndex: "Nom",
							
						},
						{
							text: "Prenom",
							dataIndex: "Prenom",
							flex:1
						},
					],
					store: App.store.create('App.AO.getAgents',
					 {
						autoLoad: true
					}) 
					
					
				},
							]		
		},
	],
	 bbar: [
				{
					xtype: "button",
					text: "Annuler",
					itemId: "annuler"
				},
		'->',
				{
					xtype: "button",
					text: "Valider",
					itemId: "ajouter"
					
				}
					], 
	});