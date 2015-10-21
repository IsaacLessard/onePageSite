$(document).ready(function(){
	$('.aboutRef').click(function(){
		var offset=$(this).offset();
		offset.left-=20px;
		offset.top-=20px;
		$('html,body').animate({
			scrollTop.offset.top,
			scrollLeft.offset.left
		});

	});
});