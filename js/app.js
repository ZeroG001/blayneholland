	(function(jQuery){

		//======== Variables ==============

		
		var windowHeight = $( window ).height();

		//==================================

		$('.section-1').css('height', windowHeight);



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
				$.fn.followTo = function ( pos ) {
		    var $this = this,
		        $window = $(windw);
		    
		    $window.scroll(function(e){
		        if ($window.scrollTop() > pos) {
		            $this.css({
		                position: 'fixed',
		                'top': '5%'
		            });

		            $('.glyphicon-chevron-down').addClass('arrow_down');
		        } else {
		            $this.css({
		                position: 'absolute',
		                top: '100%'    
		            });

		            $('.glyphicon-chevron-down').removeClass('arrow_down');
		        }
		    });
		};

		//======================================================

		var sectionTwoOffset = $('.section-2').offset().top;
		$('.arrow').followTo(sectionTwoOffset - 50);
		

		

		

		// When link or element is clicked, then ScrollTo the specified element.
		$('.arrow').scrollTo('.section-2');
		$('.nav-about').scrollTo('.section-3');
		$('.nav-work').scrollTo('.section-4');
		$('.nav-contact').scrollTo('.section-5');








	})($) //Jquery. Self initializing function end