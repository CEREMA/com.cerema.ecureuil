App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 800;
        this.height = 650;
        this.title = "Communes";
        this.bodyCls = "white";
		this.layout="border";
        this.tbar=[
        {
            xtype: "ux-searchbox",
            itemId: "searchCommunes",
            enableKeyEvents: true,
            padding: 5,
            width: 200
        }
        ];
        this.items = [
            {
                title: 'Navigation',
                collapsible: false,
                region:'center',
                id: "TMapPanel"
		    },
            {
                collapsible: false,
                region:'north',
                id: "TGridPanel",
                xtype: "grid",
                itemId: "search",
                columns: [{
                    header: "CPostal",
                    dataIndex: "codes_postaux"
                },{
                    header: "Commune",
                    flex: 1,
                    dataIndex: "nom_commune"
                },{
                    header: "Région",
                    width: 250,
                    dataIndex: "nom_region"
                }],
                store: App.store.create({fields:[],data:[]}),
                height: 200
            },
            {
			title: 'Communes',
			region:'east',
			width: 175,
			minSize: 100,
			maxSize: 250
		} 		
		];
        this.bbar = [ 
            '->',
            {
                text: "OK"
            }
        ];
        this.callParent(arguments);
    }

});