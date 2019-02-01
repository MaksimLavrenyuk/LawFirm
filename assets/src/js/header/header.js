$(document).ready(function() {
	 var HeaderHeight;
	$(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('#header').addClass('header_scroll');
            HeaderHeight = $('#header').innerHeight();
        } else {
            $('#header').removeClass('header_scroll');
            HeaderHeight = $('#header').innerHeight();
        }
    });
    $('#btnScroll').click( function(){ 
        $('html, body').animate({ scrollTop: $('#feedbackBox').offset().top - HeaderHeight }, 500);
            return false; 
    });
});
