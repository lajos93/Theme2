jQuery(document).ready(function($) {

    $('.update_favorite_remove').on('click', function(e){
	    var remove = $(this).find('.remove_favorite');
	    var add = $(this).parent().find('img.add_favorite');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_favorite_object.ajaxurl,
            data: { 
                'action': 'removefavoriteartist',
                'removefavorite': remove.attr('id'),
                },
            success: function(data){
                $('p.favorite_remove_status').show().addClass('animated fadeInDown').text("Removed from favorites"); 
                remove.addClass('hidden');
                add.removeClass('hidden');
                setTimeout(function() {
					$('p.favorite_remove_status').removeClass('fadeInDown').addClass('fadeOutUp');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_remove_status').removeClass('animated fadeOutUp').hide();
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

jQuery(document).ready(function($) {

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
                $('p.favorite_remove_status').show().addClass('animated fadeInDown').text("Removed from favorites"); 
                $(".remove_favorite").addClass('hidden');
                $('.add_favorite').removeClass('hidden');
                setTimeout(function() {
					$('p.favorite_remove_status').removeClass('fadeInDown').addClass('fadeOutUp');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_remove_status').removeClass('animated fadeOutUp').hide();
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