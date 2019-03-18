$(document).ready(function() {
	$(function() {
		if ($(window).width() < 1200){

			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<div>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');
			
			$('.navbar-nav .nav-item').each(function(index) {
				var mobileAccordionNavItmText = $(this).find('.btn-nav-link').text();
				if ($(this).hasClass('dropdown')) {

					var mobileAccordionNavItmContent = $(this).find('.dropdown-menu').html();
			
					$('<div class="mobile-menu-nav-itm">' + 
			            '<div class="mobile-menu-nav-itm__header" id="mobileNavAccordion'+index+'">' + 
			                '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+index+'" aria-expanded="true" aria-controls="collapse'+index+'">' +
			                        mobileAccordionNavItmText +
			                '</button>' +
			            '</div>' +
			            '<div id="collapse'+index+'" class="collapse" aria-labelledby="mobileNavAccordion'+index+'">' +
			                '<div class="mobile-menu-nav-itm__list">' +
			                    mobileAccordionNavItmContent +
			                '</div>' +
			            '</div>' +
        			'</div>').appendTo('.mobile-menu__nav');

				} else {
					var mobileAccordionNavItmContent = $(this).html();
					$('<div class="mobile-menu-nav-itm">' + 
						mobileAccordionNavItmContent +
						'</div>').appendTo('.mobile-menu__nav');

				};

			});

		};


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
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('#mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
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
