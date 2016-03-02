App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,
			baseCls: 'cls-header',
			xtype: "Menu",
			itemId: "MenuPanel",
			menu: [
			{
				text: "Mobilité",
				menu: [{
					text: "Ajouter un périphérique",
					itemId: "MobileADD"
				}]
			}
				/*{
					text: "Saisie modification",
					menu: [
						{
							text: "Saisie d'un appel d'offre"
						},
						{
							text: "Modification d'un appel d'offre"
						},
						{
							text: "Saisie du suivi"
						}
					]
				},
				{
					text: "Suivi de AO",
					menu: [
						{
							text: "Suivi des appels d'offre"
						},
						{
							text: "Recherche d'un AO en attente"
						}
					]
				}*/
			]		
		},
		{
			region: "center",
			split:true,
			layout: 'fit',			
			xtype: "TForm1"
		}
	]
	
});
