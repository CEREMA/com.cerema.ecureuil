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
    	id:"TMapPanel"
    }			
		        
		];
        this.bbar = [ 
        ];
        this.callParent(arguments);
    }

});