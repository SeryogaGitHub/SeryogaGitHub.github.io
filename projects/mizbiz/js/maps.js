"use strict";var map,mapSearch,mapLocation,popup,Popup,$map=document.getElementById("map"),$mapSearch=document.getElementById("map-search"),$mapLocation=document.getElementById("map-location"),$locationAutocomplete=document.querySelector(".location-autocomplete"),$locationAutocomplete2=document.querySelector(".location-autocomplete-2"),$locationAutocomplete3=document.querySelector(".location-autocomplete-3"),$locationAutocomplete4=document.querySelector(".location-autocomplete-4"),$locationAutocomplete5=document.querySelector(".location-autocomplete-5"),$locationAutocomplete6=document.querySelector(".location-autocomplete-6"),styleMap=[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}];function initMap(){var e,o,a,l,n,t,c,i,p,m={lat:25.740662,lng:-80.215623},s="img/icons/map-marker.svg";$map&&(map=new google.maps.Map($map,{center:m,zoom:12,styles:styleMap}),new google.maps.Marker({position:m,map:map,icon:s})),($locationAutocomplete||$locationAutocomplete2||$locationAutocomplete3)&&(e={types:["(cities)"]},new google.maps.places.Autocomplete($locationAutocomplete,e),new google.maps.places.Autocomplete($locationAutocomplete2,e),new google.maps.places.Autocomplete($locationAutocomplete3,e)),($locationAutocomplete4||$locationAutocomplete5||$locationAutocomplete6)&&(e={types:["(cities)"]},new google.maps.places.Autocomplete($locationAutocomplete4,e),new google.maps.places.Autocomplete($locationAutocomplete5,e),new google.maps.places.Autocomplete($locationAutocomplete6,e)),$mapSearch&&(mapSearch=new google.maps.Map($mapSearch,{center:m,zoom:12,styles:styleMap}),o=document.getElementById("search-google-map"),a=new google.maps.places.SearchBox(o),mapSearch.addListener("bounds_changed",function(){a.setBounds(mapSearch.getBounds())}),l=[],a.addListener("places_changed",function(){var t,e=a.getPlaces();0!=e.length&&(l.forEach(function(e){e.setMap(null)}),l=[],t=new google.maps.LatLngBounds,e.forEach(function(e){var o;e.geometry?(o={url:e.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)},l.push(new google.maps.Marker({mapSearch:mapSearch,icon:o,title:e.name,position:e.geometry.location})),e.geometry.viewport?t.union(e.geometry.viewport):t.extend(e.geometry.location)):console.log("Returned place contains no geometry")}),mapSearch.fitBounds(t))})),$mapLocation&&(n=new google.maps.Map($mapLocation,{center:m,zoom:12,styles:styleMap}),t=document.querySelectorAll("#map-content .object-item"),c=[],i=[],t.forEach(function(e){c.push({lat:+e.dataset.lat,lng:+e.dataset.lng}),i.push(e)}),p=c.map(function(e,o){return new google.maps.Marker({position:e,icon:s})}),new MarkerClusterer(n,p,{imagePath:"img/maps/"}),p.forEach(function(o,e){var t=new google.maps.InfoWindow({content:i[e]});o.addListener("click",function(){var e=document.querySelector(".gm-style-iw-a");e&&e.remove(),t.open(n,o)})}))}