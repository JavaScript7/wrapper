$(function(){
	var indextab=0;
	$(".notice-tit").find("li").click(function(){
		indextab = $(this).index();
		changeImg();
	});
	var timeII = setInterval(function(){
		indextab++;
		changeImg();
	},2000);
	function changeImg(){
		if(indextab>2)indextab=0;		
		$(".notice-tit").find("li").removeClass('select').eq(indextab).addClass('select');
		$('.mod').hide().eq(indextab).show();
	};

	$("#notice").on('mouseover',function(){
		clearInterval(timeII);
	});
	$("#notice").on('mouseout',function(){
		timeII = setInterval(function(){
		indextab++;
		changeImg();
	  },2000);
	});
})