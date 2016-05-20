App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 800;
        this.height = 650;
        this.title = "Communes";
        this.bodyCls = "white";
		this.layout="hbox";
        this.closeAction="destroy";
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
                xtype: "grid",
                itemId: "search",
                flex: 1,
                bbar: [
                '->',
                {
                    text: "Ajouter",
                    itemId: "Add_commune"
                }
                ],
                verticalScroller: {
                    xtype: 'paginggridscroller',
                    activePrefetch: false
                },
                columns: [{
                    header: "CPostal",
                    width: 80,
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
                width: "100%",
                store: App.store.create({fields:[],data:[]}),
                height: 200
            },
            {
                width: 100,
                padding: 10,
                xtype: "button",
                text:"Ajouter",
                itemid: "add_commune"
            },
            {
                width: 200,
                border: false,
                xtype: "grid",
                itemId: "gridcom",
                border: false,
                columns: [{
                    header: "Commune",
                    dataIndex: "nom_commune",
                    flex: 1
                }],
                store: App.store.create("gestionao2://my_communes_fields",{autoLoad: true})            
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