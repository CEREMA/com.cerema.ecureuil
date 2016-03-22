App.view.define('VForm1',{
	extend: "Ext.Panel",
	alias: "widget.TForm1",
	border: false,
	items: [
	{
		xtype: "grid",
		itemId: "AO",
		tbar: [
			{
				xtype:"button",
				itemId: "ajouter_modification",
				text: "Ajouter",
				scale: "large",
				iconAlign: "top",
				iconCls: "add",
				hidden: true
			},
			{
				xtype:"button",
				itemId: "b_favoris",
				text: "Favoris",
				scale: "large",
				iconAlign: "top",
				iconCls: "add"
			}

		]
	}	
	]
});