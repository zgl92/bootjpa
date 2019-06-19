jQuery(document).ready(function() {
		$('.smoove').smoove({offset:'0'});
	jQuery("img.lazy,img.lazyload").lazyload({ 
		effect : "fadeIn",
		threshold : 200
	});
	jQuery(".slideBox").slide({mainCell:".bd ul",titCell:".hd ul",autoPlay:true,effect:"fold",interTime:8000,mouseOverStop:false,delayTime:600,autoPage:true,
	startFun:function(i,c){
		var now=$(".slideBox .bd li").eq(i);
        if(now.attr("data-load")=="no"){
				now.css("backgroundImage","url("+now.attr("data-bg")+")");
				now.attr("data-load","yes");
			}
		},
	endFun:function(i,c){
		var now=$(".slideBox .bd li").eq(i+1);
        if(now.attr("data-load")=="no"){
			setTimeout(function(){
					now.attr("data-load","yes");
					now.css("backgroundImage","url("+now.attr("data-bg")+")");
				}, 3000);
			}
		}
	});
	// jQuery(".slide-navbox").slide({type:"menu", titCell:"li", delayTime:500, triggerTime:100});
	// $(".slide-navbox").hover(function () {
	// 	$(".slide-navbox li").stop().animate({height:'107px'},{queue:false, duration:300});
	// }, function () { 
	// 	$(".slide-navbox li").stop().animate({height:'4px'},{queue:false, duration:300});
	// });

	$(".index-news-expand").hover(function () {
		$(".index-news-expand-box").stop().slideToggle();
	});
	

	// 搜索框特效
	// 标签进场效果
	// 用于多平级标签依次载入 默认标签具有position属性及opacuty: 0;
	// direction 从哪个方向进入
	// distance  进入到指定距离
	// number    平级标签的个数
	// time      进场动画的时间
	// delay     下一标签的延迟
function Enter(obj, direction, distance, number, time, delay) {
	// 从左往右，distance > 0
	if(direction == "left"){
		obj.stop().animate({
			left : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	// 从上往下，distance > 0
	if(direction == "top"){
		obj.stop().animate({
			top : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	// CSS3 X位移
	if(direction == "X"){
		obj.stop().transition({
			x : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	if(direction == "Y"){
		obj.stop().transition({
			y : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
}
	// 点击search按钮，元素缩小至0；
	$(".head .search a").click(function(e){
		// 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。
		e.preventDefault();
		$(".head .head-top").addClass("bgcolor");
		$(".head .head-top-content span").not($(".head-main .head-top-content a.close")).addClass("hide");
		$(".head .head-top-content a.close").show().stop().animate({
			top : 0,
			opacity : 1
		}, 500, "linear", function(){
			$(".search-box").show();
			Enter($(".search-box input").eq(0), "left", 0, 2, 500, 300)
			setTimeout(function(){
				$(".search-box .search-list").show();
				Enter($(".search-box .search-list").children().eq(0), "left", 0, $(".search-box .search-list").children().length, 200, 100)
			}, 500)
		})
		$(".search-bg").stop().fadeIn(1000, "linear")
	})
	$(".head a.close, .search-bg").click(function(e){
		$(".head .head-top").removeClass("bgcolor");
		$(".head .head-top-content span").removeClass("hide");

		$(".head a.close").hide().css({
			top : -10,
			opacity : 0
		})
		$(".search-bg, .search-box").hide();
		$(".search-box input").css({
			left: 20 + '%',
			opacity : 0
		})
		$(".search-box .search-list").children().css({
			left: 20 + '%',
			opacity : 0
		});
		
	
	})

	// end

	$(".index-news-slider").slide({ mainCell:".bd ul", effect:"top", interTime: 4000, autoPlay:true});
	$(".index-case").slide({titCell:".case-menu li",mainCell:".case-list",effect:"fold",autoPage:false,autoPlay:false,switchLoad:"_src"});
	$(".index-koubei").slide({titCell:".index-koubei-tab ul li",mainCell:".index-koubei-box",effect:"fold",autoPage:false,autoPlay:false});
	$(".kh1-slider").slide({mainCell:".bd",titCell:".hd li",autoPlay:false,autoPage:false,effect:"fold",switchLoad:"_src"});
	$(".kh2-slider").slide({mainCell:".bd ul",titCell:".hd ul",autoPlay:true,autoPage:true,effect:"left",switchLoad:"_src",scroll:2,vis:5,prevCell:'.btnprev',nextCell:'.btnnext'});
	
	$(".case-read-slider").slide({mainCell:".bd ul",effect:"left",autoPage:true,autoPlay:false,scroll:4,vis:4,switchLoad:"data-original"});
	$(".views-slider").slide({mainCell:".bd ul",effect:"left",autoPage:true,autoPlay:false,scroll:4,vis:4,switchLoad:"data-original"});
	
	$(".promotion-read-slider").slide({mainCell:".bd ul",effect:"left",autoPage:true,autoPlay:false,scroll:1,vis:3});
	
	$(".webbuild-tab").slide({titCell:".hd li",mainCell:".webbuild-tab-main",effect:"fold",autoPage:false,autoPlay:false});
	$(".webbuild-tab-slider").slide({mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"left",switchLoad:"data-original",scroll:2,vis:2,prevCell:'.btnprev',nextCell:'.btnnext',interTime:6000,delayTime:1000});
	
	$(".partner_list").slide({mainCell:".bd",prevCell:'.btnprev',nextCell:'.btnnext',effect:"leftLoop",delayTime:1000,})
	

	
	
	var bgColor = ['#c7000a','#bd9a74','#f97191','#6bc096','#901d2f','#e36133','#17b1b7','#015991','#1077be','#f2b919','#df5b60','#d72b17','#262579','#b8933b','#d72b17','#6bc096','#f1b917','#5974aa','#901d30','#222784','#065992','#62b6a4','#007c09','#a3b200','#cfaf00','#e0c845','#b10068','#c03587','#c03587','#ae39cb','#882ec7','#048cbe','#048cbe','#3cb1a2','#239b8b','#3ea057','#38842b','#9d8327','#c45934','#ac370e','#dd8322','#02bdae','#176ee5','#59bbd3','#db3e3e','#4f4141','#3b424f','#16282c'];
	var L = bgColor.length;
		
	$(".news-list li a").hover(function(){
			var number = RandomNumBoth(0,L);
			
			$(this).css({"background":bgColor[number]});

		},function(){
			$(this).css({"background":"none"});
		});
		
		for(var i = 0;i<6;i++){
			shownews();
		}
	
	});
	
	
	/* 获取随机数 */
	function RandomNumBoth(Min,Max){
		  var Range = Max - Min;
		  var Rand = Math.random();
		  var num = Min + Math.round(Rand * Range); 
		  return num;
		};
	/* 获取随机数 */
	function shownews(){
		var Lli=$(".sug-article ul li").length;
		var n = RandomNumBoth(0,Lli);
		$(".sug-article ul li").eq(n).removeClass("hide");
	}
	
function Fullvideo(box, obj){
	function resizeBg() {
		$(".fullvideo").height($(window).height()-120);
		$(".fv-content").height($(window).height()-120);
		var boxR = $(window).width() / ($(window).height()-120),
			objR = obj.width() / obj.height();
		if( objR < boxR ) {
		    obj.addClass('w-f').css("margin-top", -(obj.height() - ($(window).height()-120)) / 2);
		}else{
		    obj.addClass('h-f').css("margin-left", -(obj.width() - $(window).width()) / 2);
		};
		
		var qq_tct = ($(window).height()-240)/2;
		var qq_tcl = ($(window).width()-580)/2;
		var lxb_l = ($(window).width()-560)/2;
		$(".qq_tc").css({top:qq_tct,left:qq_tcl});
		$(".lxb_box").css({top:qq_tct,left:lxb_l});
	}
	$(window).resize(resizeBg).trigger("resize");
}

$(function(){
	//视频全屏
	Fullvideo($(".fullvideo"), $(".fullvideo .mceItem-movie"));
	$(".fullvideo").height($(window).height()-120);
	$(".fv-content").height($(window).height()-120);
});


$(window).scroll(function () {
	//css3效果（使用方法：添加class：ani-view ）
	var _ismobile = false;
	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();
	var showNum = !_ismobile ? 4 : 16;
	$('.ani-view').each(function(){
		var pageQ1 = $(this).offset().top + $(this).height() / showNum;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;
		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){
			if( $(this).hasClass("fade-in-down") ) $(this).addClass('fadeInDown');
			if( $(this).hasClass("fade-in-left") )  $(this).addClass('fadeInLeft');
			if( $(this).hasClass("fade-in-right") )  $(this).addClass('fadeInRight');
			if( $(this).hasClass("indCon2-fade-in-down") )  $(this).addClass('indCon2fadeInDown');
			if( $(this).hasClass("indCon2-fade-in-up") )  $(this).addClass('indCon2fadeInUp');				
		}else {
			// if( $(this).hasClass('fadeInDown') ) $(this).removeClass(' fadeInDown');
			// if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('fadeInLeft');
			// if( $(this).hasClass('fadeInRight') ) $(this).removeClass(' fadeInRight');
			if( $(this).hasClass('fadeInDown') ) $(this).removeClass('ani-view fade-in-down fadeInDown');
			if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('ani-view fade-in-left fadeInLeft');
			if( $(this).hasClass('fadeInRight') ) $(this).removeClass('ani-view fade-in-right fadeInRight');
			if( $(this).hasClass("indCon2fadeInDown") )  $(this).addClass('ani-view indCon2-fade-in-down indCon2fadeInDown');
			if( $(this).hasClass("indCon2fadeInUp") )  $(this).addClass('ani-view indCon2-fade-in-up indCon2fadeInUp');
		}
	});
			
});
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
	new WOW().init();
};
