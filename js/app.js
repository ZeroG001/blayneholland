	(function(jQuery){

		//======== Variables ==============

		
		var windowHeight = $( window ).height();

		//==================================

		// Make section1 height the same height as viewport. the vw css measurement does the same thing
		// $('.section-1').css('height', windowHeight);



		//============= Custom jQuery Functions ================

		// Scroll to function. Upon clicking a link. You will scroll to a particular section of the page.
		$.fn.scrollTo = function( ele ) {

			$(this).click(function( event ){

				event.preventDefault();

				var elementOffset = $(ele).offset().top;
				$('body, html').animate({
		 			scrollTop: elementOffset
				});
			});
		}


		// Have the arrow follow the user after a certain position
		var windw = this;

		$.fn.arrowFollow = function () {
		    var $this = this;		        
		    var $window = $(windw);

		    $window.scroll(function(e){

		    	//Get the bottom offset of section 1
		    	bottom = $('.section-1').height() - $('.section-1').offset().top;


		    	var section_bottom = bottom - 45

		        if ($window.scrollTop() > section_bottom) {
		            $this.css({
		                position: 'fixed',

		            });

		            $('.arrow_down').addClass('arrow_up');
		        } else {

		            $this.css({
		                position: 'absolute',
		                top: '0'

		            });

		            $('.arrow_down').removeClass('arrow_up');
		        }
		    });
		};

		

		//======================================================
		var sectionTwoOffset = $('.section-2').offset().top;

		$( window ).resize(function(){
				sectionTwoOffset = $('.section-2').offset().top;		
			});

		 $('.arrow_down').arrowFollow();
		

		

		// When link or element is clicked, then ScrollTo the specified element.
		$('.arrow_down').scrollTo('.section-2');
		$('.arrow_down .arrow_up').scrollTo('section-1');
		$('.nav-about').scrollTo('.section-2');
		$('.nav-work').scrollTo('.section-3');
		$('.nav-contact').scrollTo('.section-4');



	})($) //Jquery. Self initializing function end