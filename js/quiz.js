 $(document).ready(function () {
    $("button.quiz_next_question").click(function () {

        window.setTimeout(function() {
		    window.location.href = 'http://andreaspaulli.dk/tinderbox/profile';
		}, 4000);
        
        var answer = $(".radio.active").find("input").val(), correct_answer = $.trim($(".correct_answer").text()), quiz_id_element = $(".quiz_id").text();

        if (answer == correct_answer) {

            $.ajax({
                type: "post",
                url: quizAjax.ajaxurl,
                data: {action: "quiz_fnc", complete: 'true', correct: 'true', quizid: quiz_id_element, nonce: quizAjax.quiz_nonce},
                success: function (response) {
                    console.log(response);
                    if (response == "success") {
	                    $('.answer_overlay').addClass('animated fadeInLeft').show();
                        $('.answer_overlay h1').addClass('headline_correct').html('CORRECT');
                    } else {
                        $('.answer_overlay').addClass('animated fadeInLeft').show();
                        $('.answer_overlay h1').addClass('headline_wrong').html('Something went wrong');
                        $('.answer_overlay h2').hide();
                    }
                }
            });

        } else {

            $.ajax({
                type: "post",
                url: quizAjax.ajaxurl,
                data: {action: "quiz_fnc", complete: 'true', correct: 'false', quizid: quiz_id_element, nonce: quizAjax.quiz_nonce},
                success: function (response) {
                    console.log(response);
                    if (response == "success") {
	                    $('.answer_overlay').addClass('animated fadeInLeft').show();
                        $('.answer_overlay h1').addClass('headline_wrong').html('WRONG');
                    } else {
                        $('.answer_overlay').addClass('animated fadeInLeft').show();
                        $('.answer_overlay h1').addClass('headline_wrong').html('Something went wrong');
                        $('.answer_overlay h2').hide();
                    }
                }
            });

        }

    });
});
