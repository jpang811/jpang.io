$(document).ready(function(){
	$('.caption-img').on('click', function(){
		$(this).siblings('.caption-circle')
		.addClass('show')
		.animate({
			"width": "100%",
			"height": "100%",
		}, 500);
	});
	
});


$('.ball').hover(function(){
    $(this).animate({width : '250px', height : '250px', lineHeight : '250px'}, 300);
        }, 
 function(){
     $(this).stop().animate({width : '200px', height : '200px', lineHeight : '200px'}, 200)
         });