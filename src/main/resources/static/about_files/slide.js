jq(function() {
	jq(".in_banner").hover(function(){
		jq(this).find(".slide_left").stop(false,true).animate({"opacity":"1","left":"50%"},600);
		jq(this).find(".slide_right ").stop(false,true).animate({"opacity":"1","right":"50%"},600);
	},function(){
		jq(this).find(".slide_left").stop(false,true).animate({"opacity":"0","left":"0"},600);
		jq(this).find(".slide_right").stop(false,true).animate({"opacity":"0","right":"0"},600);
	});
	setTimeout(function(){
		In0();
		jq(".in_banner ").stop(false,true).animate({"opacity":"1"},1000);
	},500);

});

jq(function(){
	jq(".in_banner").slide({type:"fade",play:"1"});
})
jq.fn.slide = function(options) {
	var defaults = {
		type:         'left',
		btn:          '.slide_btn',
		leftBtn:      '.slide_left',
		rightBtn:     '.slide_right',
		btnActive:    'click',
		picBox:       '.slide_pic',
		num:          '1',
		conWidth:     '100%',
		conHeidth:    '100%',
		time:         '5500',
		speed:        '500',
		play:         '1',
		percent:      '0'
	};
	var
		obj       =     jq.extend(defaults,options),
		self      =     jq(this),
		picUl     =     self.find(obj.picBox+">ul"),
		picLi     =     self.find(obj.picBox+">ul>li"),
		btnLi     =     self.find(obj.btn+">ul>li"),
		leftBtn   =     self.find(obj.leftBtn),
		rightBtn  =     self.find(obj.rightBtn),
		type      =     obj.type,
		conWidth  =     obj.conWidth,
		conHeight  =    obj.conHeight,
		speed     =     obj.speed,
		percent   =     obj.percent,
		len       =     Math.ceil(picLi.length/obj.num),
		index     =     0,
		timer;


	btnLi.bind(obj.btnActive,function(){
		if(index != btnLi.index(this)){
			index = btnLi.index(this);
			goanimate(index);
		}
	})

	leftBtn.click(function(){
		if(lose == 0){
		index==0 ? index=len-1 : index--
		goanimate(index);
		}
	})

	rightBtn.click(function(){
		if(lose == 0){
		index==len-1 ? index=0 : index++;
		goanimate(index);
		}
	})

	if(obj.play==1){
		self.hover(function(){
			clearInterval(timer);
		},function(){
			clearInterval(timer);
			timer = setInterval(function(){
				if(index==len-1){index=0;}else{index++;}
				goanimate(index);
			},obj.time);
		}).trigger("mouseleave");
	}

	var goanimate = function(index){
		if(index == 0){
			Out1();
			Out3();
			In0();
		}
		if(index == 1){
			Out0();
			Out2();
			In1();
		}
		if(index == 2){
			Out1();
			Out3();
			In2();
		}
		if(index == 3){
			Out0();
			Out2();
			In3();
		}
		btnLi.removeClass("active").eq(index).addClass("active");
	}

}


function In0(){
	lose = 1;
	setTimeout(function(){
		setTimeout(function(){
			jq(".bannerCon2").removeClass("on").removeClass("on2");
			jq(".bannerCon4").addClass("on");
		},500)
		jq(".in_banner li").eq(0).stop(false,true).fadeIn();
	},500)
	setTimeout(function(){
		lose = 0;
	},3600)
	
}

function Out0(){
	jq(".bannerCon4").addClass("on2");
	setTimeout(function(){
		jq(".in_banner li").eq(0).stop(false,true).fadeOut();
	},500)
}

function In1(){
	lose = 1;
	setTimeout(function(){
		setTimeout(function(){
			jq(".bannerCon3").removeClass("on").removeClass("on2");
			jq(".bannerCon4").removeClass("on").removeClass("on2");
			jq(".bannerCon1").addClass("on");
		},500)
		jq(".in_banner li").eq(1).stop(false,true).fadeIn();
	},500)
	setTimeout(function(){
		lose = 0;
	},4100)
}

function Out1(){
	jq(".bannerCon1").removeClass("on");
	setTimeout(function(){
		jq(".in_banner li").eq(1).stop(false,true).fadeOut();
	},500)
}

function In2(){
	lose = 1;
	setTimeout(function(){
		setTimeout(function(){
			jq(".bannerCon2").removeClass("on").removeClass("on2");
			jq(".bannerCon3").addClass("on");
		},500)
		jq(".in_banner li").eq(2).stop(false,true).fadeIn();
	},500)
	setTimeout(function(){
		lose = 0;
	},3500)
}

function Out2(){
	jq(".bannerCon3").addClass("on2");
	setTimeout(function(){
		jq(".in_banner li").eq(2).stop(false,true).fadeOut();
	},500)
}

function In3(){
	lose = 1;
	setTimeout(function(){
		setTimeout(function(){
			jq(".bannerCon3").removeClass("on").removeClass("on2");
			jq(".bannerCon4").removeClass("on").removeClass("on2");
			jq(".bannerCon2").addClass("on");
		},500)
		jq(".in_banner li").eq(3).stop(false,true).fadeIn();
	},500)
	setTimeout(function(){
		lose = 0;
	},3400)
}

function Out3(){
	jq(".bannerCon2").addClass("on2");
	setTimeout(function(){
		jq(".in_banner li").eq(3).stop(false,true).fadeOut();
	},500)
}

function stopEvent(){ 
  var e=arguments.callee.caller.arguments[0]||event; 
  if (e && e.stopPropagation) {
   // this code is for Mozilla and Opera
   e.stopPropagation();
  } else if (window.event) {
   // this code is for IE
   window.event.cancelBubble = true;
  }
 }