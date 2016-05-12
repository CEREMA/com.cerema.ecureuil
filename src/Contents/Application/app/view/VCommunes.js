App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 800;
        this.height = 650;
        this.title = "Communes";
        this.bodyCls = "white";
		this.layout="border";
        this.items = [
		{
			region: 'north',
			height: 150,
            layout: "hbox",
            items: [
                {
                    xtype: "grid",
                    columns: [{
                        header: "Commune",
                        dataIndex: "nom_commune"
                    }],
                    
                    store: App.store.create("gestionao2://communes{id,nom_commune+}",{buffered: true,autoLoad: true})
                }
            ]
		},
        {
			title: 'Communes',
			region:'east',
			width: 175,
			minSize: 100,
			maxSize: 250
		},{
			title: 'Navigation',
			collapsible: false,
			region:'center',
			id: "TMapPanel",
			width: "100%",
			height: "100%"
		}        
		];
        this.bbar = [ 
        ];
        this.callParent(arguments);
    }

});