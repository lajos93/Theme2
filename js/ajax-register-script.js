jQuery(document).ready(function($) {

    $('a#show_register').on('click', function(e){
        $('form#register, .register_overlay').show();
        $('div.login_overlay, form#login').hide();
        $('div.register_overlay, form#register .close_register').on('click', function(){
            $('form#register, .register_overlay').addClass('animated fadeOutDown');
            setTimeout(function() {
				$('form#register, .register_overlay').removeClass('fadeOutDown').hide();
			}, 1000);
        });
        e.preventDefault();
    });

    // Perform AJAX login on form submit
    $('form#register').on('submit', function(e){
        $('form#register p.status').show().text(ajax_register_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_register_object.ajaxurl,
            data: { 
                'action': 'ajaxregister', //calls wp_ajax_nopriv_ajaxregister
                'username': $('form#register #username').val(), 
                'password': $('form#register #password').val(), 
                'email': $('form#register #email').val(), 
                'security': $('form#register #security').val() },
            success: function(data){
                $('form#register p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_register_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});