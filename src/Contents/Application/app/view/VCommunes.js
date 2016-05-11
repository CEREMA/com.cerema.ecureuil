App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 1024;
        this.height = 868;
        this.title = "Consultation de l'appel d'offre";
        this.bodyCls = "white";
		this.layout="fit";
        this.items = [
		{
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