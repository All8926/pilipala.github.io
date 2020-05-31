var index = 0; //索引：index表示第几张图片在展示
var sum = $('.list li').length; //获取图片数量
var timer = null; //定时器

//开启轮播
function startLunbo() {
	/* if (index == sum) {
		index = 0;
	} */
	$('.list>li').eq(index).fadeIn().siblings().fadeOut(); //淡入淡出效果
	$('.pointList>li').eq(index).addClass("active").siblings().removeClass("active");
	//当展示的是第index张图片时给第index个圆点添加active样式，其他圆点移除active样式
}

//自动轮播
function iLunbo() {
	timer = setInterval(function() {
		index++;
		if (index == sum) {
			index = 0;
		}
		startLunbo();
	}, 2000); //定时器：2秒

}

$(function() {
	$('.list li').eq(0).show(); //默认加载第一张图片

	iLunbo();

	$('.pointList>li').mouseover(function() {
		clearInterval(timer);
		index = $(this).index();
		startLunbo();
	});

	$('.wrap').hover(function() {
		$('.btn').show();
		clearInterval(timer);
	}, function() {
		$('.btn').hide();
		iLunbo();
	});

	$('#goPre').click(function() {
		clearInterval(timer);
		if (index == 0) {
			index = sum;
		}
		index--;
		startLunbo();

	});
	$('#goNext').click(function() {
		clearInterval(timer);
		index++;
		if (index == sum) {
			index = 0;
		}
		
		startLunbo();

	});

});
