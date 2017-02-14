$( document ).ready(function() {

	$('.currently_playing').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
	});
	

	$('.artists').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 8000,
		pauseOnHover: false,
	});

	$('.partners_img').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		slidesToShow: 1,
		responsive: true,
	});
	
	$("#quiz_link, .quiz_call_to_action").click(function(e) {
		if(!$('body').hasClass('logged-in')) {
			e.preventDefault();
			$(".navigation_overlay").addClass('fadeOutLeft').removeClass('fadeinLeft');
			$('form#login, .login_overlay').show().addClass('animated fadeInUp');
		}
	});
	
	$('div.login_overlay, form#login .close_login').on('click', function(){
        $('form#login, .login_overlay').removeClass('fadeInUp').addClass('fadeOutDown');
        setTimeout(function() {
			$('form#login, .login_overlay').removeClass('fadeOutDown').hide();
		}, 1000);
    });

	$(".radio").click(function(){
	   $(".radio").removeClass('active');
	   $(this).addClass('active');
	});
	
	$(".mapbox").click(function(){
	   $(".mapbox").removeClass('visiblemap').addClass('hiddenmap');
	});

	$(".sort").click(function(){
	   $(".sort").removeClass('sort_active');
	   $(this).addClass('sort_active');
	});
	
	var welcome = $('.user_welcome');
	welcome.hide();
	setTimeout(function() {
		welcome.show();
	    welcome.addClass('fadeInUp');
	}, 2000);
	setTimeout(function() {
		welcome.removeClass('fadeInUp');
	    welcome.addClass('fadeOutDown');
	}, 6000);
	
	$(".social_share").click(function() {
		var notice = $('.social_share_notice');
		notice.show();
	    notice.addClass('fadeInDown');
		setTimeout(function() {
			notice.removeClass('fadeInDown');
		    notice.addClass('fadeOutUp');
		}, 4000);
		setTimeout(function() {
			notice.hide();
			notice.removeClass('fadeOutUp');
		}, 5000);
	});
	
	$("#schedule .artist_wrapper, #artists .artist_wrapper, .foodstall_wrapper, .news_wrapper").click(function() {
		$(this).find('.single_overlay').show().addClass('animated fadeInRight');
		$('.single_underlay').show().addClass('animated fadeInRight');
	});
	
	$(".close_single_overlay").click(function() {
		var overlay = $('.single_overlay, .single_underlay');
	    overlay.addClass('fadeOutRight').removeClass('fadeInRight');
		setTimeout(function() {
			overlay.hide().removeClass('animated fadeOutRight');
		}, 600);
	});

	$(".hamburger").click(function() {			
		$(".navigation_overlay").addClass('fadeInLeft').removeClass('fadeOutLeft').show();
	});
	
	$(".close_button").click(function() {
		$(".navigation_overlay").addClass('fadeOutLeft').removeClass('fadeinLeft');
	});

	var foodOptions = {
	  valueNames: [ 'name', 'type' ]
	};

	var food = new List('foodstall', foodOptions);
	
	var schedule = {
	  valueNames: [ 'name', 'time', 'stage' ]
	};

	var scheduleList = new List('schedule', schedule);
	
	var artistOptions = {
	  valueNames: [ 'name', 'time', 'genre' ]
	};

	var artist = new List('artists', artistOptions);
	
});