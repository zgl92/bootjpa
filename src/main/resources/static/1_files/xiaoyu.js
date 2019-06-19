jq(document).ready(function(){

	window.minfish = window.minfish || {}
    minfish.bd = jq('body')
	
	minfish.fullgallery = minfish.fullgallery ? Number(minfish.fullgallery) : 1
	minfish.fullimage = minfish.fullimage ? Number(minfish.fullimage) : 1
	minfish.click = 'click'
	
	jq('.sitenav-on').on(minfish.click, function(){
		minfish.bd.toggleClass('sitenav-active')
	})

	jq('.sitenav-mask').on(minfish.click, function(){
		minfish.bd.removeClass('sitenav-active')
		minfish.bd.removeClass('menbernav-active')
	})

	jq('.menbernav-on').on(minfish.click, function(){
		minfish.bd.toggleClass('menbernav-active')
	})

 	jq('.search-show').on(minfish.click, function(){
		jq(this).hide()
		jq('.search-off').show()
		minfish.bd.addClass('search-active')
		
	})

	jq('.search-off').on(minfish.click, function(){
		jq(this).hide()
		jq('.search-show').show()
		minfish.bd.removeClass('search-active')
	})
  
    // REWARDS
    jq('[etap="rewards"]').on(minfish.click, function(){
    	jq('.mf-rewards-mask, .mf-rewards').fadeIn()
    })

    jq('[etap="rewards-close"]').on(minfish.click, function(){
    	jq('.mf-rewards-mask, .mf-rewards').fadeOut()
    })


})
/* go top */
jQuery.fn.scrollTo = function(speed) {
	var targetOffset = jq(this).offset().top;
	jq('html,body').stop().animate({scrollTop: targetOffset}, speed);
	return this;
};
	jq(".float_qq li.hover").hover(function(){
		jq(this).find(".con").stop(false,true).animate({"width":50+jq(this).find("a").width()})
		jq(this).find(".m_con").stop(false,true).fadeIn();
	},function(){
		jq(this).find(".con").stop(false,true).animate({"width":"50"})
		jq(this).find(".m_con").stop(false,true).fadeOut();
	});
	function all_ewm(){
		jq(".float_qq li.click").click(function(){
			jq(".all_ewmBox ").stop(false,true).fadeIn();
		});
		jq(".all_ewmBox").click(function(){
			
			jq(this).stop(false,true).fadeOut();
		});
		jq(".all_ewmCon").click(function(){
			stopEvent()
		});
	}
	all_ewm();
