jQuery(document).ready(function($) {

    $('.add_favorite').on('click', function(e){
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_favorite_object.ajaxurl,
            data: { 
                'action': 'favoriteartist',
                'favorite': $(this).attr('id'), 
                },
            success: function(data){
                $('p.favorite_add_status').show().addClass('animated fadeInUp').text("added to favorites");
                $('.add_favorite').addClass('hidden');
                $('.remove_favorite').removeClass('hidden');
                setTimeout(function() {
					$('p.favorite_add_status').removeClass('fadeInUp').addClass('fadeOutDown');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_add_status').removeClass('animated fadeOutDown').hide();
				}, 2500);
				return;
            },
            error: function(data){
                console.log('ERRORRRR');    
            }

        });
        e.preventDefault();
    });
});