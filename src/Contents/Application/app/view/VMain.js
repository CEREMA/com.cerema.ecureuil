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
			]		
		},
		{
			region: "center",
			split:true,
			layout: 'fit',			
			xtype: "TPrincipal"
		},
		{
			region: "center",
			split:true,
			layout: 'fit',			
			xtype: "TFavoris",
			hidden: true
		}
	]
	
});
