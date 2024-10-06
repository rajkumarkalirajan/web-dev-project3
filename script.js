function init() {
//alert(;it works');
var el = document.getElementByid('canvas');
var my Location = new google.maps.LatLng(55.750471, 37.622532)
var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapsTypeId.SATELLITE,
			position: google.maps.ControlPosition.BOTTOM_CENTER
}
};

var myMap = new google.maps.Map(el, mapOptions);
var marker = new google.maps.Marker({
	position: myLocation,
	map: myMap,
	animation: google.maps.Animation.BOUNCE,
	icon: 'iit-icon.png'
});

var contentString = '<h1>IIT Perlsterin Hall</h1><p>Lorem ipsum dolor sit amet, content String
});

}
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.open(myMap, marker);
	});
	
google.maps.event.adDomListener(window, 'load', init);



		