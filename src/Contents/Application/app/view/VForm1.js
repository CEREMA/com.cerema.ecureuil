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
			},
			{
				xtype:"button",
				itemId: "b_appeloffre",
				text: "Appel d'offre",
				scale: "large",
				iconAlign: "top",
				iconCls: "add"
			}

		],
		features: [
		{
			groupHeaderTpl: '{name}',
			ftype: 'groupingsummary'
		}
		],
		columns: [
			{
				text: "Id",
				dataIndex: "IdAppelOffre",
				width: 50
			},			{
				text: "Objet",
				dataIndex: "Objet",
				flex: 1
			},
			{
				text: "Thématique",
				dataIndex: "nom_thematique",
				width: 300,
				hidden: true				
			},
			{
				text: "Client",
				dataIndex: "Client",
				width: 200				
			},
			{
				text: "Date de parution",
				dataIndex: "DateParution",
				type: "date",
				renderer:  Ext.util.Format.dateRenderer('d/m/Y')
			},
			{
				text: "Date limite",
				dataIndex: "DateLimite",
				type: "date",
				renderer: function(value) {
					return '<div style="color:red">'+value.toString('dd/MM/yyyy')+'</div>'
				}
			}
		],
		store: App.store.create('App.AO.getAll',{
			groupField: 'nom_thematique'
		})
	}	
	]
});