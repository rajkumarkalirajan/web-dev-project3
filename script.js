function init() {
alert('It works!');

var el = document.getElementByid('canvas');
var my Location = new google.maps.LatLng(55.750471, 37.622532)
var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapsTypeId.SATELLITE,
};

var myMap = new google.maps.Map(el, mapOptions);

var marker = new google.maps.Marker({
	position: myLocation,
	map: myMap,
	animation: google.maps.Animation.BOUNCE,
	icon:'Kremlin.png'
});

var contentString = '<h1>Moscow_Kremmlin</h1><p>Kremlin is a fortified complex in Moscow</p>';
var infowindow = new google.maps.Inflowindow({
		content: contentString
});

}
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.open(myMap, marker);
	});
}	
google.maps.event.adDomListener(window, 'load', init);



		