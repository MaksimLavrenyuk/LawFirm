$(document).ready(function() {
    $('[type="tel"]').mask("+7 (999) 999-99-99");

});
 scrollOnClick();
function scrollOnClick() {
	var indentHeight =$('#header').innerHeight();
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 0) {
	    indentHeight = $('#header').innerHeight();
	  } else {
	    indentHeight = $('#header').innerHeight();
	  }
	});
	$('.btn-scroll').click( function(e){ 
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - indentHeight
		}, 900);
	});
}

// Импортируем хедер
//= header/header.js

// Импортируем мобильное меню
//= mobile-menu/mobile-menu.js

// Импортируем мобильное меню
//= form/form.js