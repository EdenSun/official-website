$(function(){
	$('#header-waypoint').waypoint(function() {
		$('#header').toggleClass('fixed');
	});

	$('.search').click(function(e) {
        target = $(this).parent('li');
		target.find('.searchForm').toggle();
		$(this).hide();
		
		return false;
    });
	
	showlang = false;
	$('.language').click(function(e) {
        target = $(this).parent('li');
		
		if(!showlang){
			target.width(target.innerWidth(true) + 75);
			$(this).addClass('active');
			showlang = true;
		}else{
			target.width(target.innerWidth(true) - 75);
			$(this).removeClass('active');
			showlang = false;
		}
		target.find('.submenu').toggle();
		
		return false;
    });
	
	$('.quick').click(function(e) {
        $('.quickLink').stop(true,true).slideToggle(300);
		
		return false;
    });
	
	$('.goTop').click(function(e) {
		$('body').scrollTo(0,600);
		
        return false;
    });
	
	/*if($('.page').length > 0){
		//pageCount = $('.page').find('li').size();
		
		pageW = 0;
		$('.page').find('li').each(function(index, element) {
         	pageW = pageW +  $(this).outerWidth(true);
        });
		
		//pageW = $('.page').find('li').outerWidth(true);
		$('.page').width(pageW);
	}*/
	
	//-------------------------------------------------------------------------
	
	$('.menu').find('.slidedown').hover(function(e) {
		$(this).find('.slidedownWrap').show();
		$(this).find('a:eq(0)').addClass('overactive');
	},function(){
		$(this).find('.slidedownWrap').hide();
		$(this).find('a').removeClass('overactive');
    });
	
	$('.menu').find('.slidedownWrap').find('a').hover(function(e) {
		getClass = $(this).attr("class");
		$('.menuExcerpt').find('p').hide();
		$('.menu').find('.slidedownWrap').find('.active').removeClass('active');
		$('.menuExcerpt').find('p.' + getClass).show();
		$(this).addClass('active')
	}, function(){
		//$('.menuExcerpt').find('p').hide();
		//$('.menuExcerpt').find('p.excerpt1').show();
    });
	
	productdown = false;
	$('.menu').find('.slidedownMenu').hover(function(e) {
		if(jQuery.browser.mobile){
			posW = 1024;
		}else{
			posW = $(window).width();
		}
		
		$(this).find('.slidedownWrap').css({
			'width': posW,
			'display': 'block',
			'marginLeft': -$('.menu').find('.slidedownMenu').offset().left
		});
		$(this).find('a:eq(0)').addClass('overactive');
		productdown = true;
	},function(){
		productdown = false;
		setTimeout(timeUp, 200);
	});
	
	$('.menu').find('.slidedownMenu').find('.slidedownWrap').hover(function(e) {
        productdown = true;
    });
	
//	$('.scrollto a').click(function(e) {
//        target = $(this).attr("href");
		
//		if($(this).parents('.scrollto').find('li').length > 0){
//			$('.scrollto').find('.active').removeClass('active');
//		}else{
//			$('.nav').find('h2').find('.active').removeClass('active');
//		}

//		$(this).addClass('active');

//		$('body').scrollTo($(target).offset().top - $('#header').height(),600);
		
//		return false;
//    });

$('.scrollto a').click(function(e) {
        target = $(this).attr("href");
        pos = target.indexOf('#');
        id = target.substr(pos);
        
        if($(this).parents('.scrollto').find('li').length > 0){
            $('.scrollto').find('.active').removeClass('active');
        }else{
            $('.nav').find('h2').find('.active').removeClass('active');
        }
 
        $(this).addClass('active');
 
        $('body').scrollTo($(id).offset().top - $('#header').height(),600);
        
        return false;
    });
 
if($('.scrollto').length > 0){
        hash = location.hash;
        if($(hash).length > 0){
             $('body').scrollTo($(hash).offset().top - $('#header').height(),600);
        }
    }
	
	if($('.side-fixed').length > 0){
		sideTop = $('.side-fixed').offset().top;
	}
	
	if($('.pagenav').length > 0){
		pagenavTop = $('.pagenav').offset().top;
	}
});

$(window).scroll(function(e) {
	scrollTop = $(window).scrollTop();
	
	if(scrollTop >= $('#header-waypoint').offset().top){
		$('.topNav').hide();
	}else{
		$('.topNav').show();
	}
	
	if(scrollTop > 200){
		$(".goTop").fadeIn();
	}else{
		$(".goTop").fadeOut();
	}
	
	if($('.quickLink').css("display") == "block"){	
		$('.quickLink').hide();
	}
	
	if($('.side-fixed').length > 0 && $('#pageend').length > 0){
		if(scrollTop >= sideTop - $('#header').height()){
			if(scrollTop > $('#pageend').offset().top - $(window).height() + getH()){
				$('.side-fixed').css({
					"position":"absolute",
					"top": $('#pageend').position().top - $('.side-fixed').height()
				});
			}else{
				$('.side-fixed').css({
					"position":"fixed",
					"top": $('#header').height() - 11
				});
			}
		}else{
			$('.side-fixed').css({
				"position":"relative",
				"top":0
			});
		}
	}
	
	/*if($('.pagenav').length > 0){
		if(scrollTop >= sideTop - $('#header').height()){
			$('.pagenav').css({
				"position":"fixed",
				"top": 0,
				"paddingTop": $('#header').height()
			});
		}else{
			$('.pagenav').css({
				"position":"relative",
				"top":0,
				"paddingTop": 7
			});
		}
	}*/
});

function getH(){
	h = $(window).height() - $('.side-fixed').height() - $('#header').height();
	
	return h;
}

function timeUp(){
	if(productdown == false){
		$('.menu').find('.slidedownMenu').find('.slidedownWrap').hide();
		$('.menu').find('.slidedownMenu').find('a:eq(0)').removeClass('overactive');
	}
}

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|IPad|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);