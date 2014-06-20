$(document).ready(function(){
	
	$('.topmenu').find('li').click( function(event){
		

		if ( $(this).hasClass('selected') ) {
		} else {
			$('.selected').removeClass('selected');
			var type_name = $(this).attr("class");
			$(this).addClass('selected');
			$('.article').addClass('selected');
		}

	});
});