/**
 * MapIt
 *
 * @copyright	Copyright 2013, Dimitris Krestos
 * @license		Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link			http://vdw.staytuned.gr
 * @version		v0.2.2
 */

/* Available options
 *
 * Map type: 	ROADMAP, SATELLITE, HYBRID, TERRAIN
 * Map styles: false, GRAYSCALE
 *
 */

	/* Sample html structure

	<div id='map_canvas'></div>

	*/


document.write('<scr'+'ipt type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false" ></scr'+'ipt>');

;(function($, window, undefined) {
	"use strict";

	$.fn.mapit = function(options) {

		var defaults = {
			latitude: 	 45.698479,
			longitude: 	 9.665806,
			zoom: 			 15,
			type: 			 'ROADMAP',
			scrollwheel: false,
			marker: {
				latitude:  45.698479,
				longitude: 9.665806,
				icon: 			'images/marker-home.png',
				title: 			'Viale|19',
				open: 			false,
				center: 		true
			},
			address: '<h2>Viale|19</h2><p>V.le Vittorio Emanuele II<br />24122, Bergamo</p><p>Tel.: +39 035 123 4567<br />Fax: +30 210 123 4567</p>',
			styles: 'GRAYSCALE',
			locations: [
                
				[45.697879, 9.667692, 'images/cinema.png', 'Cinema San Marco', 'Panagi Tsaldari 140, Athina, Greece', false, '1'],
                [45.696590, 9.673035, 'images/cinema.png', 'Cinema Capitol', 'Τροίας 34, Αθήνα, Greece', false, '1'],
                [45.697734, 9.660745, 'images/cinema.png', 'Bilanciamento', 'Greece', false, '1'],
				[45.696351, 9.683271, 'images/cinema.png', 'Cinema Teatro Del Borgo', 'Megalou Alexandrou ke Kalipsous, Kallithea, Greece', false, '1'],
				[45.700411, 9.673958, 'images/musei.png', 'Museo Adriano Bernareggi', 'Πειραιώς 100, Αθήνα, Greece', false, '2'],
				[45.704293, 9.675803, 'images/musei.png', 'Accademia Carrara Museo', 'Greece', false, '2'],
				[45.703513, 9.676103, 'images/musei.png', 'Galleria Arte Moderna e Contemporanea di Bergamo', 'Μιχαλακοπούλου 1, Αθήνα, Greece', false, '2'],
			    [45.697511, 9.668094, 'images/bank.png', 'Banca dellaBergamasca', 'Greece', false, '3'],
			    [45.695960, 9.668780, 'images/bank.png', 'Banca di Italia', 'Greece', false, '3'],
                [45.697863, 9.669488, 'images/bank.png', 'Banca di Italia', 'Greece', false, '3'],
                [45.697044, 9.671187, 'images/bank.png', 'Banca di Credito Cooperativo di Calcio e di Covo - Società cooperativa', 'Greece', false, '3'],
                [45.695156, 9.669030, 'images/bank.png', 'popolare di Bergamo', 'Greece', false, '3'],
            
                
                
			],
			origins: [
				['45.700825', '9.665110'],  
				['45.697378', '9.666916']
				
			]
		};

		var options = $.extend(defaults, options);

		$(this).each(function() {

			var $this = $(this);

				// Init Map
				var directionsDisplay = new google.maps.DirectionsRenderer();

				var mapOptions = {
					scrollwheel: options.scrollwheel,
					scaleControl: false,
					center: 			options.marker.center ? new google.maps.LatLng(options.marker.latitude, options.marker.longitude) : new google.maps.LatLng(options.latitude, options.longitude),
					zoom: 				options.zoom,
					mapTypeId: 		eval('google.maps.MapTypeId.' + options.type)
				};
				var map = new google.maps.Map(document.getElementById($this.attr('id')), mapOptions);
				directionsDisplay.setMap(map);

				// Styles
				if (options.styles) {
					var GRAYSCALE_style = [{featureType:"all",elementType:"all",stylers:[{saturation: -100}]}];
					var MIDNIGHT_style	= [{featureType:'water',stylers:[{color:'#021019'}]},{featureType:'landscape',stylers:[{color:'#08304b'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#0c4152'},{lightness:5}]},{featureType:'road.highway',elementType:'geometry.fill',stylers:[{color:'#000000'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#0b434f'},{lightness:25}]},{featureType:'road.arterial',elementType:'geometry.fill',stylers:[{color:'#000000'}]},{featureType:'road.arterial',elementType:'geometry.stroke',stylers:[{color:'#0b3d51'},{lightness:16}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#000000'}]},{elementType:'labels.text.fill',stylers:[{color:'#ffffff'}]},{elementType:'labels.text.stroke',stylers:[{color:'#000000'},{lightness:13}]},{featureType:'transit',stylers:[{color:'#146474'}]},{featureType:'administrative',elementType:'geometry.fill',stylers:[{color:'#000000'}]},{featureType:'administrative',elementType:'geometry.stroke',stylers:[{color:'#144b53'},{lightness:14},{weight:1.4}]}]
					var BLUE_style			= [{featureType:'water',stylers:[{color:'#46bcec'},{visibility:'on'}]},{featureType:'landscape',stylers:[{color:'#f2f2f2'}]},{featureType:'road',stylers:[{saturation:-100},{lightness:45}]},{featureType:'road.highway',stylers:[{visibility:'simplified'}]},{featureType:'road.arterial',elementType:'labels.icon',stylers:[{visibility:'off'}]},{featureType:'administrative',elementType:'labels.text.fill',stylers:[{color:'#444444'}]},{featureType:'transit',stylers:[{visibility:'off'}]},{featureType:'poi',stylers:[{visibility:'off'}]}]
					var mapType = new google.maps.StyledMapType(eval(options.styles + '_style'), { name: options.styles });
					map.mapTypes.set(options.styles, mapType);
					map.setMapTypeId(options.styles);
				}

				// Home Marker
				var home = new google.maps.Marker({
					map: 			map,
					position: new google.maps.LatLng(options.marker.latitude, options.marker.longitude),
					icon: 		new google.maps.MarkerImage(options.marker.icon),
					title: 		options.marker.title
				});

				// Add info on the home marker
				var info = new google.maps.InfoWindow({
					content: options.address
				});

				// Open the info window immediately
				if (options.marker.open) {
					info.open(map, home);
				} else {
					google.maps.event.addListener(home, 'click', function() {
						info.open(map, home);
					});
				};

				// Create Markers (locations)
				var infowindow = new google.maps.InfoWindow();
				var marker, i;
				var markers = [];

				for (i = 0; i < options.locations.length; i++) {

					// Add Markers
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(options.locations[i][0], options.locations[i][1]),
						map: 			map,
						icon: 		new google.maps.MarkerImage(options.locations[i][2] || options.marker.icon),
						title: 		options.locations[i][3]
					});

					// Create an array of the markers
					markers.push(marker);

					// Init info for each marker
					google.maps.event.addListener(marker, 'click', (function(marker, i) {
						return function() {
							infowindow.setContent(options.locations[i][4]);
							infowindow.open(map, marker);
						}
					})(marker, i));

				};

				// Directions
				var directionsService = new google.maps.DirectionsService();

				$this.on ('route', function(event, origin) {
					var request = {
						origin: 			new google.maps.LatLng(options.origins[origin][0], options.origins[origin][1]),
						destination: 	new google.maps.LatLng(options.marker.latitude, options.marker.longitude),
						travelMode: 	google.maps.TravelMode.DRIVING
					};
					directionsService.route(request, function(result, status) {
						if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(result);
						};
					});
				});

				// Hide Markers Once (helper)
				$this.on ('hide_all', function() {
					for (var i=0; i<options.locations.length; i++) {
						markers[i].setVisible(false);
					};
				});

				// Show Markers Per Category (helper)
				$this.on ('show', function(event, category) {
					$this.trigger('hide_all');
					$this.trigger('reset');

					// Set bounds
					var bounds = new google.maps.LatLngBounds();
					for (var i=0; i<options.locations.length; i++) {
						if (options.locations[i][6] == category) {
							markers[i].setVisible(true);
						};

						// Add markers to bounds
						bounds.extend(markers[i].position);
					};

					// Auto focus and center
					map.fitBounds(bounds);
				});

				// Hide Markers Per Category (helper)
				$this.on ('hide', function(event, category) {
					for (var i=0; i<options.locations.length; i++) {
						if (options.locations[i][6] == category) {
							markers[i].setVisible(false);
						};
					};
				});

				// Clear Markers (helper)
				$this.on ('clear', function() {
					if (markers) {
						for (var i = 0; i < markers.length; i++ ) {
							markers[i].setMap(null);
						};
					};
				});

				$this.on ('reset', function() {
					map.setCenter(new google.maps.LatLng(options.latitude, options.longitude), options.zoom);
				});

				// Hide all locations once
				$this.trigger('hide_all');

		});

	};

	$(document).ready(function () { $('[data-toggle="mapit"]').mapit(); });

})(jQuery);