var TMap={};

Ext.define('Lib.map',{
    singleton: true,
    init: function() {
        console.log(App.get('VCommunes panel#PanelCommune'));
        TMap = new google.maps.Map(App.get('VCommunes panel#PanelCommune').getEl().dom,{
            zoom: 5,
            center: new google.maps.LatLng(47.866669, 5.33333),
            mapTypeId: google.maps.MapTypeId.HYBRID	
        })
    },
    markers: [],
    marker: function(l,m){
        var marker=new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(l,m)
        });
        this.markers.push(marker);
        marker.setMap(TMap);
    }    
});