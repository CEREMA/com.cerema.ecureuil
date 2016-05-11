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
			title: 'Main Content',
			collapsible: false,
			region:'center',
			layout: "fit",
			items: [
{ 
      xtype: 'component', 
      // some long html to demonstrate scrolling
      html: '<div style="background-color:red" width="100%" height="600px" id="TMapPanel">&nbsp;</div>'
    }			]
		}        
		];
        this.bbar = [ 
        ];
        this.callParent(arguments);
    }

});