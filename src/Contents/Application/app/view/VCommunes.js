App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 1024;
        this.height = 868;
        this.title = "Consultation de l'appel d'offre";
        this.bodyCls = "white";
		this.layout="border";
        this.items = [
		{
			region: 'south',
			height: 50,
			minSize: 50,
			maxSize: 50,
			cmargins: '5 0 0 0'
		},{
			title: 'Navigation',
			region:'east',
			margins: '5 0 0 0',
			cmargins: '5 5 0 0',
			width: 175,
			minSize: 100,
			maxSize: 250
		},{
			title: 'Main Content',
			collapsible: false,
			region:'center',
			margins: '5 0 0 0'
		}        
		];
        this.bbar = [ 
        ];
        this.callParent(arguments);
    }

});