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
            padding: 5,
            width: 200
        }
        ];
        this.items = [
            {
                title: 'Navigation',
                collapsible: false,
                region:'center',
                id: "TMapPanel",
                width: "100%",
                height: "100%"
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