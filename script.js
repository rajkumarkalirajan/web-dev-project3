function initMap() {
    alert('It works!');

    function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.4239163, lng: -122.0947209},
    zoom: 17,
    mapId: 'DEMO_MAP_ID',
  });

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: {lat: 37.4239163, lng: -122.0947209},
  });

  marker.addListener('click', ({domEvent, latLng}) => {
    const {target} = domEvent;
    // Handle the click event.
    // ...
  });
}
		
		function startBounce(marker) {
			marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(() => {
				marker.setAnimation(null);
				startBounce(marker);
			}, 750);
}
		startBounce(marker);
}



		