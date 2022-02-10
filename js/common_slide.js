$(function(){
    var i =0;
    $("#best_list > li").mouseenter(function(){
        i = ($(this).index())+1
        $(".best_wrap").hide()
        $(".best_wrap:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })
    
    $("#best_list li").mouseenter(function () {
        $("#best_list li").css({color: "#4169E1",backgroundColor: "#fff"});
        $(this).css({color: "#fff",backgroundColor: "#4169E1"});
    });
    
    //일간베스트
    function day_prev() {
        $(".daybox:last").prependTo(".day_slide");
        $(".day_slide").css({marginLeft: -1100});
        $(".day_slide").stop().animate({marginLeft: 0});
    }

    function day_next() {
        $(".day_slide").stop().animate({marginLeft: -1100}, function(){
            $(".daybox:first").appendTo(".day_slide");
            $(".day_slide").css({marginLeft: 0});
        });
    }
    $("#day_prev").click(function(){
        day_prev();
    });
    $("#day_next").click(function(){
        day_next();
    }); 
    
    //주간베스트
    function weekly_prev() {
        $(".weekbox:last").prependTo(".week_slide");
        $(".week_slide").css({marginLeft: -1100});
        $(".week_slide").stop().animate({marginLeft: 0});
    }

    function weekly_next() {
        $(".week_slide").stop().animate({marginLeft: -1100}, function(){
            $(".weekbox:first").appendTo(".week_slide");
            $(".week_slide").css({marginLeft: 0});
        });
    }
    $("#weekly_prev").click(function(){
        weekly_prev();
    });
    $("#weekly_next").click(function(){
        weekly_next();
    });    
    
    //월간베스트
    function mon_prev() {
        $(".monbox:last").prependTo(".mon_slide");
        $(".mon_slide").css({marginLeft: -1100});
        $(".mon_slide").stop().animate({marginLeft: 0});
    }

    function mon_next() {
        $(".mon_slide").stop().animate({marginLeft: -1100}, function(){
            $(".monbox:first").appendTo(".mon_slide");
            $(".mon_slide").css({marginLeft: 0});
        });
    }
    $("#mon_prev").click(function(){
        mon_prev();
    });
    $("#mon_next").click(function(){
        mon_next();
    });
});