jQuery(document).ready(function($) {

    // Show the login dialog box on click
    $('a#show_login').on('click', function(e){
        $('form#login, .login_overlay').show().addClass('animated fadeInUp');
        $('form#register, .register_overlay').hide();
       $('div.login_overlay, form#login .close_login').on('click', function(){
            $('form#login, .login_overlay').removeClass('fadeInUp').addClass('fadeOutDown');
          setTimeout(function() {
				$('form#login, .login_overlay').removeClass('fadeOutDown').hide();
			}, 1000);
        });
        e.preventDefault();
    });

    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
        $('form#login p.status').show().text(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #username').val(), 
                'password': $('form#login #password').val(), 
                'security': $('form#login #security').val() },
            success: function(data){
                $('form#login p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});