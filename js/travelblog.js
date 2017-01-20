$(document).ready(function() {
	// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.next').fadeIn(200)
			$('.prev').fadeIn(200);
		} else {
			$('.next').fadeOut(200)
			$('.prev').fadeOut(200);
		}
	});
			
	var $currentElement = $(".blog-format").first();

	$(".next").click(function () {
	    var $nextElement = $currentElement.next('.blog-format');
	    // Check if next element actually exists
	    if($nextElement.length) {
	        // If yes, update:
	        // 1. $currentElement
	        // 2. Scroll position
	        $currentElement = $nextElement;
	        $('html, body').stop(true).animate({
	            scrollTop: $nextElement.offset().top
	        }, 500);
	    }
	    return false;
	});

	$(".prev").click(function () {
	    var $prevElement = $currentElement.prev('.blog-format');
	    // Check if previous element actually exists
	    if($prevElement.length) {
	        // If yes, update:
	        // 1. $currentElement
	        // 2. Scroll position
	        $currentElement = $prevElement;
	        $('html, body').stop(true).animate({
	            scrollTop: $prevElement.offset().top
	        }, 500);
	    }
	    return false;  
	});

});