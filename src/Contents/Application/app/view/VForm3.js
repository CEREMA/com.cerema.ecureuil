App.view.define('VForm3',{
	extend: "Ext.window.Window",
	width: 610,
	height: 640,
	title: "Ajouter",
	alias: "widget.TForm3",
	items: [
	{
					layout: "hbox",
					border: false,
					width: "100%",
					items: [
					{
						xtype: 'label',
						itemId: 'myFieldNotification',
						text: 'Notification',
						margin: {
								top: 10,
								left:10
								
							}
					},
					
					{
					xtype: "grid",
					itemId: "grid2",
					margin: {
								top: 10,
								bottom: 0,
								left:159,
								right: 0
							},
					
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
					width: 300,
					height: 575,
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