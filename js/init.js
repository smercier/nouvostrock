$(function() {
    //$("div.map").htmapl();
    
    $("a.links").click(function(){
        find(this);
        return false;
    });
 
   //var template = 'http://a.tiles.mapbox.com/v3/mapbox.mapbox-streets/{z}/{x}/{y}.png';
   var template = 'http://a.tiles.mapbox.com/v3/mapbox.mapbox-light/{Z}/{X}/{Y}.png';
   // var template = 'http://tile.openstreetmap.org/{Z}/{X}/{Y}.png';
   //var template = 'http://otile2.mqcdn.com/tiles/1.0.0/osm/{Z}/{X}/{Y}.jpg';
   var provider = new MM.TemplatedMapProvider(template);

 
    map = new MM.Map('map', provider, null, null);

    map.setCenter(new MM.Location(46.7647463,-71.41951));
    map.setZoom(11);

    $("button#zoomIn").bind("click", function(){
        map.setZoom(map.getZoom() + 1);
    });

     $("button#zoomOut").bind("click", function(){
        map.setZoom(map.getZoom() - 1);
    });
});

function find(e){
    $("#marker").hide();
    switch(e.id)
    {
    case "district03":
        $("#marker").attr("src", "css/icons/commercial-building.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81581, lon: -71.22402})
                .zoomTo(15)).run(2000, function(){
                    addMarker(46.81581, -71.22402);
                });
        break;
    case "metro":
        $("#marker").attr("src", "css/icons/grocery-store.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81596, lon: -71.21757 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81596, -71.21757);
                });
        break;
    case "intermarche":
        $("#marker").attr("src", "css/icons/grocery-store.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81342, lon: -71.22770 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81342, -71.22770);
                });
        break;
    case "brunet":
        $("#marker").attr("src", "css/icons/pharmacy.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81485, lon: -71.22145 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81485, -71.22145);
                });
        break;
    case "uniprix":
        $("#marker").attr("src", "css/icons/pharmacy.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81479, lon: -71.22480 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81479, -71.22480);
                });
        break;
    case "jeancoutu":
        $("#marker").attr("src", "css/icons/pharmacy.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81379, lon: -71.22624 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81379, -71.22624);
                });
        break;
    case "jardinsstroch":
        $("#marker").attr("src", "css/icons/tree-2.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81322, lon: -71.22291 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81322, -71.22291);
                });
        break;
    case "starbucks":
        $("#marker").attr("src", "css/icons/cafe.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81330, lon: -71.22422 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81330, -71.22422);
                });
        break;
    case "nextar":
        $("#marker").attr("src", "css/icons/cafe.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81295, lon: -71.22783 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81295, -71.22783);
                });
        break;
    case "brulerie":
        $("#marker").attr("src", "css/icons/cafe.svg");
        easey().map(map)
            .to(map.locationCoordinate({ lat: 46.81272, lon: -71.22538 })
                .zoomTo(17)).run(2000, function(){
                    addMarker(46.81272, -71.22538);
                });
        break;
    default:
        return false;
    }
}

/*function addMarker(lat, lon){
    var marker = [{ 'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [lon, lat]
                },
                'properties': { 'name': 'Tom' }
              }];

    var markerLayer = mmg().factory(function(x) {
        var d = document.createElement('div');
        d.setAttribute('class', 'marker');
        return d;
    }).features(marker);
    //var markerLayer = mmg().factory(simplestyle_factory).features(marker);

    map.addLayer(markerLayer);
}
*/

function addMarker(lat, lon){
    var loc = new MM.Location(lat, lon);
    var point = map.locationPoint(loc);
    var strPoint = new String(point);
    var x = strPoint.substring(1, strPoint.search(","));
    var y = strPoint.substring(strPoint.search(",") + 1, strPoint.length - 1);

    $("#marker").css("left", x).css("top", y).show();
}
