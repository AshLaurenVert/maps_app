// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function (){

	function initialize() {
	  var myCoords = new google.maps.LatLng(latitude, longitude);
	  
	  var mapOptions = {
	    zoom: 15,
	    center: myCoords,
	    scrollwheel: false    
	  };

	  var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions); 


var marker = new google.maps.Marker({
	  position: myCoords,
	  map: map,
	  title: 'Stronbox West',
	  });
	  
}
	
google.maps.event.addDomListener(window, 'load', initialize);	
});