$(document).ready(function(){
	//左菜单用
    $('.sidelist').mousemove(function(){
		$(this).find('.i-list').show();
		$(this).find('h3').addClass('hover');
		$(this).addClass('active');
	});
	$('.sidelist').mouseleave(function(){
		$(this).find('.i-list').hide();
		$(this).find('h3').removeClass('hover');
		$(this).removeClass('active');
	});
	
	//注册用
	var h = $(window).height(), h2;
	$(".l_main").css("height", h-190);
	$(window).resize(function() {
		h2 = $(this).height();
		$(".l_main").css("min-height", h2);
	});	
	
});
