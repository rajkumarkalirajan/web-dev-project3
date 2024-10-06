function initMap() {
    console.log('Map initialization successful!');

    // Define the location for the map center
    const myLocation = { lat: 55.750471, lng: 37.622532 };

    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
    });

    // Create the marker
    const marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        animation: google.maps.Animation.DROP, // Drop animation on marker
        icon: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kremlin%2C_Moscow%2C_Russia.jpg/300px-Kremlin%2C_Moscow%2C_Russia.jpg',
            scaledSize: new google.maps.Size(40, 40), 
        },
    });

    // Create info window content
    const contentString = '<h1>Moscow Kremlin</h1><p>Kremlin is a fortified complex in Moscow</p>';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    // Add mouseover and mouseout listeners for the marker
    marker.addListener('mouseover', function () {
        infowindow.open(map, marker);
    });

    marker.addListener('mouseout', function () {
        infowindow.close();
    });

    // Function to make the marker bounce
    function startBounce(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
            marker.setAnimation(null);
            startBounce(marker); 
        }, 750);
    }
    startBounce(marker); 
}
