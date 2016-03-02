App.view.define('VForm4',{
	extend: "Ext.window.Window",
	width: 465,
	height: 410,
	title: "Ajouter",
	alias: "widget.TForm4",
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
					itemId: "grid3",
					margin: {
								top: 10,
								bottom: 0,
								left:159,
								right: 0
							},
					
					columns: [
						{
							text: "Nom groupe",
							width: 120,
							flex:1,
							dataIndex: "LibUnic",
							
						},
						
					],
					width: 200,
					height: 345,
					store: App.store.create('App.AO.getUnites', // Creation du store
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
					itemId: "annuler2"
				},
		'->',
				{
					xtype: "button",
					text: "Valider",
					itemId: "ajouter2"
					
				}
					], 
	});