App.view.define('VForm3',{
	extend: "Ext.window.Window",
	width: 610,
	height: 640,
	title: "Notification agents",
	alias: "widget.TForm3",
    layout: "fit",
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
            store: App.store.create('bpclight://agents{Nom+,Prenom}',
             {
                autoLoad: true
            }) 										
        }        
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