(function($) {

/*
*  This function will render a Google Map onto the selected jQuery element
*/

function render_map( $el ) {

	// var
	var $markers = $el.find('.marker');

	// vars
	var args = {
		zoom		: 13,
		center		: new google.maps.LatLng(0, 0),
		scrollwheel : false,
		disableDoubleClickZoom : true,
		mapTypeId	: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
            };

	// create map
	var map = new google.maps.Map( $el[0], args);

	// add a markers reference
	map.markers = [];

	// add markers
	$markers.each(function(){

    	add_marker( $(this), map );

	});

	// center map
	center_map( map );

}

/*
*  add_marker
*/


function add_marker( $marker, map ) {

	// var
	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );


	var food = {
			url: "http://andreaspaulli.dk/tinderbox/wp-content/themes/tinderbox/svg/yellow-dot.svg",
			scaledSize: new google.maps.Size(25,25)
			}
	var stage = {
			url: "http://andreaspaulli.dk/tinderbox/wp-content/themes/tinderbox/svg/beige-dot.svg",
			scaledSize: new google.maps.Size(25,25)
			}
	var emergency = {
			url: "http://andreaspaulli.dk/tinderbox/wp-content/themes/tinderbox/svg/red-dot.svg",
			scaledSize: new google.maps.Size(25,25)
			}
	var toilet = {
			url: "http://andreaspaulli.dk/tinderbox/wp-content/themes/tinderbox/svg/azure-dot.svg",
			scaledSize: new google.maps.Size(25,25)
			}
	var exit = {
			url: "http://andreaspaulli.dk/tinderbox/wp-content/themes/tinderbox/svg/teal-dot.svg",
			scaledSize: new google.maps.Size(25,25)
			}

	if ( $marker.attr("data-icon") == "food" ) {
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon        : food
		});
	} else if ( $marker.attr("data-icon") == "stage" ) {
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon        : stage
		});
	} else if ( $marker.attr("data-icon") == "emergency" ) {
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon        : emergency
		});
	} else if ( $marker.attr("data-icon") == "toilet" ) {
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon        : toilet
		});
	} else if ( $marker.attr("data-icon") == "exit" ) {
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon        : exit
		});
	}

	// add to array
	map.markers.push( marker );

	// if marker contains HTML, add it to an infoWindow
	if( $marker.html() )
	{
		// create info window
		var infowindow = new google.maps.InfoWindow({
			content		: $marker.html()
		});

		google.maps.event.addListener(marker, 'click', function() {
			var box = $('.box_color').val();
			$('.mapbox').addClass(box);

			// map.panTo(marker.getPosition());
			var contenthtml = $marker.html()
			//console.log(contenthtml)
			$('.mapbox').html(contenthtml);
			if ($('.mapbox').hasClass('hiddenmap')) {

					$('.mapbox').removeClass('hiddenmap');
					$('.mapbox').addClass('visiblemap');
			}

		});
	}

}

/*
*  This function will center the map, showing all markers attached to this map
*/

function center_map( map ) {

	// vars
	var bounds = new google.maps.LatLngBounds();

	// loop through all markers and create bounds
	$.each( map.markers, function( i, marker ){

		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

		bounds.extend( latlng );

	});

	// set center of map
    map.setCenter( bounds.getCenter() );
    map.setZoom( 14 );


}
$(document).ready(function(){

	$('#map').each(function(){

		render_map( $(this) );

	});

});

})(jQuery);