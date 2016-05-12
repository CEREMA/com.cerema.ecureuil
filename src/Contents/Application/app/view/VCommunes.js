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
			region: 'south',
			height: 150,
			minSize: 150,
			maxSize: 150,
            layout: "hbox",
            items: [
            {
                baseCls: "Search",
                width: 128,
                height: "100%",
                border: false
            },
            {
                layout: "vbox",
                flex: 1,
                height: "100%",
                border: false,
                items: [
                    {
                        xtype: "textfield",
                        border: false,
                        width: "100%",
                        flex: 1
                    },
                    {
                        xtype: "grid",
                        width: "100%",
                        border: false,
                        columns: [],
                        store: App.store.create({fields:[],data:[]}),
                        flex: 1
                    }                    
                ]
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