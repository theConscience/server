$(document).ready(function(){
	$('.article').find('div').click( function(event){
		event.preventDefault();
		event.stopPropagation();
		function backoff() {
			$('.c').addClass('to_center');
			$('.c').removeClass('to_left');
		}
		if($(this).hasClass('to_left')) {
			if($(this).hasClass('a')) {
				$('.to_center').addClass('to_right');
				$('.to_center').removeClass('to_center');
				$('.a').addClass('to_center');
				$('.a').removeClass('to_left');
			}
			if($(this).hasClass('b')) {
				$('.to_center').addClass('to_right');
				$('.to_center').removeClass('to_center');
				$('.b').addClass('to_center');
				$('.b').removeClass('to_left');
			}


			

		} else if ($(this).hasClass('a')) {
			$(this).removeClass('to_center');
			$(this).addClass('to_left');
			$(this).parent().find('.b').removeClass('to_right');
			$(this).parent().find('.b').addClass('to_center');
		
		} else if($(this).hasClass('b')) {
			$('.b').removeClass('to_center');
			$('.b').addClass('to_left');
			$('.b').parent().find('.c').removeClass('to_right');
			$('.b').parent().find('.c').addClass('to_center');

		} else if( $(this).hasClass('c')) {
			$('.c').removeClass('to_center');
			$('.c').addClass('to_left');
			setTimeout(backoff, 100);
		}
		
		$(document).keydown(function(e){
				if(e.keyCode == 8) {
					e.preventDefault();
				}
		});
		$(document).keypress(function(e){
				if(e.keyCode == 8) {
					e.preventDefault();
				}
		});

		$(document).keyup(function(e){ // BackSpace reaction!
			if(e.keyCode == 8  && !$('.a').hasClass('to_center')) {
				e.preventDefault();
				$('.to_right').removeClass('to_right');
				
				setTimeout(cCentertoRight, 5);

				function cCentertoRight() {
					if($('.c').hasClass('to_center')) {
						$('.c').removeClass('to_center');
						$('.c').addClass('to_right');
						$('.b').removeClass('to_left');
						$('.b').addClass('to_center');
					}
				}

				function bCentertoRight() {
					if($('.b').hasClass('to_center')) {
						$('.b').addClass('to_right');
						$('.b').removeClass('to_center');
						$('.a').addClass('to_center');
						$('.a').removeClass('to_left');
					}
				}

	
				setTimeout(bCentertoRight, 4);
				setTimeout(cCentertoRight, 10);
			}
		});
	});
});

