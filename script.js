<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map Example</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap" async defer></script>
    <style>
        #map {
            height: 400px; /* Set height */
            width: 100%;   /* Set width */
        }
    </style>
</head>
<body>
    <h1>Our Location</h1>
    <div id="map"></div>
    <script>
        function initMap() {
            alert('It works!');

            var myLocation = new google.maps.LatLng(55.755274, 37.616886); // Moscow coordinates
            var mapOptions = {
                center: myLocation,
                zoom: 18, // Adjust zoom level as needed
                mapTypeId: google.maps.MapTypeId.SATELLITE,
            };

            var myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLocation,
                map: myMap,
                animation: google.maps.Animation.BOUNCE,
                icon: 'https://via.placeholder.com/30/FF0000/FFFFFF?text=K',
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
    </script>
</body>
</html>
