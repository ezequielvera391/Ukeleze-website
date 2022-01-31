document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

/*  function init() {
    var mapOptions = { "center": {  "lat": -34.61457871771449,  "lng": -58.52793631697124 }, "clickableIcons": true, "disableDoubleClickZoom": false, "draggable": true, "fullscreenControl": true, "keyboardShortcuts": true, "mapTypeControl": true, "mapTypeControlOptions": {  "text": "Default (depends on viewport size etc.)",  "style": 0 }, "mapTypeId": "roadmap", "rotateControl": true, "scaleControl": true, "scrollwheel": true, "streetViewControl": true, "styles": [  {   "featureType": "administrative",   "elementType": "all",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "administrative.country",   "elementType": "all",   "stylers": [    {     "visibility": "on"    },    {     "color": "#00858a"    }   ]  },  {   "featureType": "administrative.country",   "elementType": "labels",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "administrative.province",   "elementType": "all",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "administrative.locality",   "elementType": "all",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "administrative.neighborhood",   "elementType": "all",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "administrative.land_parcel",   "elementType": "all",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "landscape.man_made",   "elementType": "geometry",   "stylers": [    {     "color": "#f6ebcb"    }   ]  },  {   "featureType": "landscape.natural",   "elementType": "geometry",   "stylers": [    {     "color": "#f7f1df"    }   ]  },  {   "featureType": "landscape.natural.landcover",   "elementType": "geometry.fill",   "stylers": [    {     "color": "#f7f1df"    }   ]  },  {   "featureType": "landscape.natural.terrain",   "elementType": "geometry",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "landscape.natural.terrain",   "elementType": "geometry.fill",   "stylers": [    {     "color": "#f7f1df"    }   ]  },  {   "featureType": "poi",   "elementType": "labels",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "poi.business",   "elementType": "all",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "poi.government",   "elementType": "all",   "stylers": [    {     "visibility": "on"    },    {     "color": "#f3dd9d"    }   ]  },  {   "featureType": "poi.medical",   "elementType": "geometry",   "stylers": [    {     "color": "#fbd3da"    },    {     "visibility": "on"    }   ]  },  {   "featureType": "poi.park",   "elementType": "geometry",   "stylers": [    {     "color": "#bde6ab"    }   ]  },  {   "featureType": "road",   "elementType": "geometry.stroke",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "road",   "elementType": "labels",   "stylers": [    {     "visibility": "on"    }   ]  },  {   "featureType": "road",   "elementType": "labels.icon",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "road.highway",   "elementType": "geometry.stroke",   "stylers": [    {     "color": "#f8a179"    }   ]  },  {   "featureType": "road.highway",   "elementType": "labels.icon",   "stylers": [    {     "visibility": "off"    }   ]  },  {   "featureType": "road.arterial",   "elementType": "geometry.fill",   "stylers": [    {     "color": "#ffffff"    }   ]  },  {   "featureType": "road.local",   "elementType": "geometry.fill",   "stylers": [    {     "color": "#ffffff"    }   ]  },  {   "featureType": "transit.station.airport",   "elementType": "geometry.fill",   "stylers": [    {     "color": "#e6dcbd"    }   ]  },  {   "featureType": "water",   "elementType": "geometry",   "stylers": [    {     "color": "#3dbbc2"    }   ]  } ], "zoom": 16, "zoomControl": true};
    var mapElement = document.getElementById('ez-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var heatmap = new google.maps.visualization.HeatmapLayer({data: []});heatmap.setOptions({"dissipating":false,"opacity":0.6,"radius":2});heatmap.setMap(map);
    google.maps.event.addDomListener(window, "resize", function() { var center = map.getCenter(); google.maps.event.trigger(map, "resize"); map.setCenter(center); });
  }
google.maps.event.addDomListener(window, 'load', init);
*/
