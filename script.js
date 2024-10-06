function initMap() {
    alert('It works!');

    var el = document.getElementById('map');
    var myLocation = new google.maps.LatLng(55.750471, 37.622532);
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE, 
    };

    var myMap = new google.maps.Map(el, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kremlin%2C_Moscow%2C_Russia.jpg/300px-Kremlin%2C_Moscow%2C_Russia.jpg'
    });

    var contentString = '<h1>Moscow Kremlin</h1><p>Kremlin is a fortified complex in Moscow</p>';
    var infowindow = new google.maps.InfoWindow({ 
        content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close(); 
    });
}



		