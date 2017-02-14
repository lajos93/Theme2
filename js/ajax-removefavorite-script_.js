jQuery(document).ready(function($) {

    $('.remove_favorite').on('click', function(e){
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_favorite_object.ajaxurl,
            data: { 
                'action': 'removefavoriteartist',
                'removefavorite': $(this).attr('id'),
                },
            success: function(data){
                $('p.favorite_remove_status').show().addClass('animated fadeInUp').text("Removed from favorites"); 
                $(".remove_favorite").addClass('hidden');
                $('.add_favorite').removeClass('hidden');
                setTimeout(function() {
					$('p.favorite_remove_status').removeClass('fadeInUp').addClass('fadeOutDown');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_remove_status').removeClass('animated fadeOutDown').hide();
				}, 2500);     
            },
            error: function(data){
                console.log('ERRORRRR');    
            }

        });
        e.preventDefault();
    });

    $('.remove_favorite_user').on('click', function(e){
	    var parentWrapper = $(this).parent();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_favorite_object.ajaxurl,
            data: { 
                'action': 'removefavoriteartist',
                'removefavorite': $(this).attr('id'),
                },
            success: function(data){
                $(parentWrapper).addClass('animated fadeOutLeft');
                $('p.favorite_remove_status').show().addClass('animated fadeInUp').text("Removed from favorites"); 
                setTimeout(function() {
					$('p.favorite_remove_status').removeClass('fadeInUp').addClass('fadeOutDown');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_remove_status').removeClass('animated fadeOutDown').hide();
				}, 2500);     
            },
            error: function(data){
                console.log('ERRORRRR');    
            }

        });
        e.preventDefault();
    });
});