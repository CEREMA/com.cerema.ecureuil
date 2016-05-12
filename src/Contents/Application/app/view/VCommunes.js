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
			height: 50,
			minSize: 50,
			maxSize: 50,
            layout: "hbox",
            items: [
            {
                baseCls: "Search",
                width: 41,
                height: "100%"
            },
            {
                xtype: "textfield",
                flex: 1
            }
            ]
		},{
			title: 'Communes',
			region:'east',
			width: 175,
			minSize: 100,
			maxSize: 250,
			height: 350
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