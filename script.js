function initMap() {
    console.log('Map initialization successful!');

    // Define the location for the map center
    const myLocation = { lat: 37.4239163, lng: -122.0947209 };

    // Create the map
    <gmp-map
      center="43.4142989,-124.2301242"
      zoom="4"
      map-id="DEMO_MAP_ID"
      style="height: 400px"
    >
      <gmp-advanced-marker
        position="37.4220656,-122.0840897"
        title="Mountain View, CA"
      ></gmp-advanced-marker>
      <gmp-advanced-marker
        position="47.648994,-122.3503845"
        title="Seattle, WA"
      ></gmp-advanced-marker>
    </gmp-map>

    // Create the marker
      const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 37.4239163, lng: -122.0947209 },
  });

        animation: google.maps.Animation.DROP, // Drop animation on marker
        icon: {
            url: https://maps.app.goo.gl/TxXeeowNDaqcRmrK6
            scaledSize: new google.maps.Size(40, 40), 
        },
    });

    // Create info window content
    const contentString = '<h1>Costco/p>';
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
