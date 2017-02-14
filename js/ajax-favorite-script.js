jQuery(document).ready(function($) {

    $('.update_favorite_add').on('click', function(e){
	    var add = $(this).find('img.add_favorite');
	    var remove = $(this).parent().find('img.remove_favorite');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_favorite_object.ajaxurl,
            data: { 
                'action': 'favoriteartist',
                'favorite': add.attr('id'), 
                },
            success: function(data){
                $('p.favorite_add_status').show().addClass('animated fadeInDown').text("added to favorites");
                add.addClass('hidden');
                remove.removeClass('hidden');
                setTimeout(function() {
					$('p.favorite_add_status').removeClass('fadeInDown').addClass('fadeOutUp');
				}, 1500); 
				setTimeout(function() {
					$('p.favorite_add_status').removeClass('animated fadeOutUp').hide();
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