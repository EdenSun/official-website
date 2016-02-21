$(function(){	
	if($.fn.cycle){
		bannerResize();
		$('.home-cycle').find('.cycle ul').cycle({ 
			speed: 1000,
			timeout: 10000,
			slideExpr: "li",
			pager: ".home-cycle .pager",
			slideResize: 0,
			prev: '.home-cycle .prev',
			next: '.home-cycle .next'
		});
		
		$('.home-cycle .pager').width($('.home-cycle .pager li').size() * $('.home-cycle .pager li').outerWidth(true));
		
		$('.home-slide').find('.wrap').cycle({ 
			fx: 'scrollLeft',
			speed: 1000,
			timeout: 0,
			slideResize: 0,
			slideExpr: ".slide",
			prev: '.home-slide .prev',
			next: '.home-slide .next'
		});
	}
	
	if($('#world').length > 0){
		$('.location').find('a').click(function(e) {
			target = $(this).attr('href');
			target = target.substr(1);

			$('.location').find('.active').removeClass('active');
			$(this).addClass('active');

			$('#world').find('.active').removeClass('active');
			$('#world').find('.' + target).addClass('active');
			
			targetTop = Math.round($('#world').find('.' + target).css('top').substr(0,3)) + 10;
			targetLeft = Math.round($('#world').find('.' + target).css('left').substr(0,3)) + 10;
			
			$('.point-wrap').hide();
			$('#' + target + '-wrap').show().css({
				"top":	targetTop,
				"left": targetLeft
			});
		
			return false;
        });
		
		$('#world').find('a.point').click(function(e) {
			target = $(this).attr('href');
			target = target.substr(1);
			
			$('#world').find('.active').removeClass('active');
			$(this).addClass('active');
			
			$('.location').find('.active').removeClass('active');
			$('.location').find('a[href="#' + target + '"]').addClass('active');
			
			targetTop = Math.round($('#world').find('.' + target).css('top').substr(0,3)) + 10;
			targetLeft = Math.round($('#world').find('.' + target).css('left').substr(0,3)) + 10;
			
			$('.point-wrap').hide();
			$('#' + target + '-wrap').show().css({
				"top":	targetTop,
				"left": targetLeft
			});

			return false;
		});
	}
	
	$('.tab').find('a').click(function(e) {
        page = $(this).attr("href");
		
		$('.tab').find('.active').removeClass('active');
		$(this).addClass('active');
		
		$('.news-list').load(page + ' .news-list .row', function(){
			$('.news-list').find('.item').hide();
			$('.news-list').find('.item').each(function(index, element) {
				$(this).delay(index * 100).fadeIn(400, 'easeInOutExpo', function(){
				});
			});
		});
		
		return false;
    });
	
});
	
$(window).resize(function(e) {
    bannerResize();
});	


$(window).scroll(function(e) {
	scrollTop = $(window).scrollTop();

	/*if(scrollTop >= $('#world').offset().top - $(window).height() + $('#world').height()){
		$('#world').find('a.point').each(function(index, element) {
            $(this).delay(Math.floor(Math.random()*40)*50+200).fadeIn(600, 'easeInOutExpo', function(){
				targetTop = Math.round($('#world').find('.p5').css('top').substr(0,3)) + 10;
				targetLeft = Math.round($('#world').find('.p5').css('left').substr(0,3)) + 10;
				$('#p5-wrap').stop().fadeTo(600,1).css({
					"top":	targetTop,
					"left": targetLeft
				});
			});
        });
	}*/
});

function bannerResize(){
	screenW = $(window).width();
	slideH = 456;
	
	percent = screenW / 1600;
	imgH = Math.round(percent * 700);

	if(imgH < 450){
		getTop = 0;
	}else{
		getTop = Math.round((imgH - 456) / 2);	
	}
	
	$('.home-cycle').css({
		"width": screenW
	});

	$('.home-cycle .cycle').css({
		"marginTop": -getTop
	});
	
	$('.home-cycle .rel').css({
		"height": 456 + getTop
	});
	
	$('.home-cycle img').css({
		"width": screenW,
		"height": imgH
	});
	
}
