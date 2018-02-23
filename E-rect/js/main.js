jQuery(document).ready(function() {
	// var $nav_li=$("#navbar li");
	// $nav_li.on('mouseenter',function() {
	// 	$nav_li.removeClass('current_item');
	// 	$(this).addClass('current_item');
	// });
	$(window).scroll(function () {
		if ($(window).scrollTop() > window.innerHeight) {
			$('#navArea').css({
				"position": 'fixed',
				"top": '0',
				"width":"100%",
				"background":"#f1efef"
			});
		}
    	else{
        	$('#navArea').css('position', 'relative');
		}
	});
	$('#navbar').onePageNav();
});