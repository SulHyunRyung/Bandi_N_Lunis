$(function(){
    //바로온off fadeIn
    $(".tap_m > li").mouseenter(function(){
        $(".tap_s").stop().hide();
        $(this).find(".tap_s").stop().fadeIn();
    }).mouseleave(function(){
        $(".tap_s").stop().hide();
    });
    
    //setInterval(slide,3000);
    
    //화제의 책 수동슬라이드
	var i = 0;

	function hot_left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$("#hot_page > p").text((i + 1) + "/2")
	};
    
	function hot_right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$("#hot_page > p").text((i + 1) + "/2")
	};
    
    function hot_prev(){
        $("#sub_hot li:last").prependTo("#sub_hot");
        $('#sub_hot').css({marginLeft:-360});
        $("#sub_hot").stop().animate({marginLeft:0});
    }
    function hot_next(){
        $("#sub_hot").stop().animate({marginLeft:-360},function(){
          $("#sub_hot li:first").appendTo("#sub_hot");
          $(this).css({marginLeft:0});
        });
    }
    $("#hot_prev").click(function(){
        hot_prev();
        hot_left();
    });
    $("#hot_next").click(function(){
        hot_next();
        hot_right();
    });
    
    //위클리북 수동슬라이드
    var i = 0;

	function wee_left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$("#weekly_page > p").text((i + 1) + "/2")
	};
    
	function wee_right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$("#weekly_page > p").text((i + 1) + "/2")
	};
    
    function wee_prev(){
        $("#sub_week li:last").prependTo("#sub_week");
        $('#sub_week').css({marginLeft:-360});
        $("#sub_week").stop().animate({marginLeft:0});
    }
    function wee_next(){
        $("#sub_week").stop().animate({marginLeft:-360},function(){
          $("#sub_week li:first").appendTo("#sub_week");
          $(this).css({marginLeft:0});
        });
    }
    $("#wee_prev").click(function(){
        wee_prev();
        wee_left()
    });
    $("#wee_next").click(function(){
        wee_next();
        wee_right();
    });
        
    //오늘의 책 수동슬라이드
    function to_prev(){
        $(".todaybox li:last").prependTo(".todaybox");
        $('.todaybox').css({marginLeft:-670});
        $(".todaybox").stop().animate({marginLeft:0});
    }
    function to_next(){
        $(".todaybox").stop().animate({marginLeft:-670},function(){
          $(".todaybox li:first").appendTo(".todaybox");
          $(this).css({marginLeft:0});
        });
    }
    $("#to_prev").click(function(){
        to_prev();
    });
    $("#to_next").click(function(){
        to_next();
    });
    
    //세일 판촉 수동슬라이드
    function gf_prev(){
        $("#giftbox li:last").prependTo("#giftbox");
        $('#giftbox').css({marginLeft:-430});
        $("#giftbox").stop().animate({marginLeft:0});
    }
    function gf_next(){
        $("#giftbox").stop().animate({marginLeft:-430},function(){
          $("#giftbox li:first").appendTo("#giftbox");
          $(this).css({marginLeft:0});
        });
    }
    $("#gf_prev").click(function(){
        gf_prev();
    });
    $("#gf_next").click(function(){
        gf_next();
    });

});