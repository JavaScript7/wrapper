$(function(){
	//轮播
	var index=0;
	$(".ico_btn").find("li").hover(function(){
		index = $(this).index();
		changeImg();
	});
	var timeI = setInterval(function(){
		index++;
		changeImg();
	},2000);
	function changeImg(){
		if(index>4)index=0;		
		$(".ico_btn").find("li").removeClass('active').eq(index).addClass('active');
		$('.banner_pic').find("img").hide().eq(index).show();
	};
	$(".ico_btn_r").on("click",function next(){
		index=index+1;
		changeImg();
	});
	$(".ico_btn_l").on("click",function pre(){
		index=index-1;
		if(index<0){
			index=4;
		}
		changeImg()
	});
	$(".banner").on('mouseover',function(){
		clearInterval(timeI);
	});
	$(".banner").on('mouseout',function(){
		timeI = setInterval(function(){
		index++;
		changeImg();
	  },2000);
	});
//	楼层
	$('#lift_nav ul li').click(function(){
		var index_this = $(this).index();
		var offsetH = $('.module').eq(index_this).offset().top-80;
		
		$("html,body").animate({scrollTop:offsetH},800);
	});
	$('#lift_nav .returnTop').click(function(){
		$("html,body").animate({scrollTop:0},800);
	});
})