$(document).ready(function() {
	$(function() {

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('#mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
	    	transferNavInMobile();
	    	transferHeaderSecondInMobile()
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('#mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	transferNavFromMobile();
	    	transferHeaderSecondOutMobile()
	    	removeBodyOverlay();
		};

		function transferNavInMobile() {
			var mainNav = $('#main-nav');
			$('#mobile-menu-nav').append(mainNav);
		};

		function transferHeaderSecondInMobile() {
			var headerSecondChildren = $('#header-second').children();
			$('#mobile-menu__second').append(headerSecondChildren);
		};

		function transferNavFromMobile() {
			var mainNav = $('#main-nav');
			$('#navbarNavDropdown').append(mainNav);
		};

		function transferHeaderSecondOutMobile() {
			var headerSecondChildren = $('#mobile-menu__second').children();
			$('#header-second').append(headerSecondChildren);
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};
	 	
	});
});
