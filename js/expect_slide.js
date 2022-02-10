$(function(){
    var i =0;
    $("#new_list > li").mouseenter(function(){
        i = ($(this).index())+1
        $(".new_wrap").hide()
        $(".new_wrap:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })
    
    $("#new_list li").mouseenter(function () {
        $("#new_list li").css({color: "#666"});
        $(this).css({color: "#4169E1"});
    });
    
    //기대신간 전체 슬라이드
    function nb_prev() {
        $(".new_box1:last").prependTo(".new_slide1");
        $(".new_slide1").css({marginLeft: -1100});
        $(".new_slide1").stop().animate({marginLeft: 0});
    }

    function nb_next() {
        $(".new_slide1").stop().animate({marginLeft: -1100}, function(){
            $(".new_box1:first").appendTo(".new_slide1");
            $(".new_slide1").css({marginLeft: 0});
        });
    }
    $("#nb_prev").click(function(){
        nb_prev();
    });
    $("#nb_next").click(function(){
        nb_next();
    });
    
    //기대신간 소설
    function fb_prev() {
        $(".new_box2:last").prependTo(".new_slide2");
        $(".new_slide2").css({marginLeft: -1100});
        $(".new_slide2").stop().animate({marginLeft: 0});
    }

    function fb_next() {
        $(".new_slide2").stop().animate({marginLeft: -1100}, function(){
            $(".new_box2:first").appendTo(".new_slide2");
            $(".new_slide2").css({marginLeft: 0});
        });
    }
    $("#fb_prev").click(function(){
        fb_prev();
    });
    $("#fb_next").click(function(){
        fb_next();
    });    
    
    //기대신간 인문학
    function hb_prev() {
        $(".new_box3:last").prependTo(".new_slide3");
        $(".new_slide3").css({marginLeft: -1100});
        $(".new_slide3").stop().animate({marginLeft: 0});
    }

    function hb_next() {
        $(".new_slide3").stop().animate({marginLeft: -1100}, function(){
            $(".new_box3:first").appendTo(".new_slide3");
            $(".new_slide3").css({marginLeft: 0});
        });
    }
    $("#hb_prev").click(function(){
        hb_prev();
    });
    $("#hb_next").click(function(){
        hb_next();
    });  
    
    //에세이
    function eb_prev() {
        $(".new_box4:last").prependTo(".new_slide4");
        $(".new_slide4").css({marginLeft: -1100});
        $(".new_slide4").stop().animate({marginLeft: 0});
    }

    function eb_next() {
        $(".new_slide4").stop().animate({marginLeft: -1100}, function(){
            $(".new_box4:first").appendTo(".new_slide4");
            $(".new_slide4").css({marginLeft: 0});
        });
    }
    $("#eb_prev").click(function(){
        eb_prev();
    });
    $("#eb_next").click(function(){
        eb_next();
    }); 
    
    //자기계발
    function sb_prev() {
        $(".new_box5:last").prependTo(".new_slide5");
        $(".new_slide5").css({marginLeft: -1100});
        $(".new_slide5").stop().animate({marginLeft: 0});
    }

    function sb_next() {
        $(".new_slide5").stop().animate({marginLeft: -1100}, function(){
            $(".new_box5:first").appendTo(".new_slide5");
            $(".new_slide5").css({marginLeft: 0});
        });
    }
    $("#sb_prev").click(function(){
        sb_prev();
    });
    $("#sb_next").click(function(){
        sb_next();
    });  
    
    //취미
    function tb_prev() {
        $(".new_box6:last").prependTo(".new_slide6");
        $(".new_slide6").css({marginLeft: -1100});
        $(".new_slide6").stop().animate({marginLeft: 0});
    }

    function tb_next() {
        $(".new_slide6").stop().animate({marginLeft: -1100}, function(){
            $(".new_box6:first").appendTo(".new_slide6");
            $(".new_slide6").css({marginLeft: 0});
        });
    }
    $("#tb_prev").click(function(){
        tb_prev();
    });
    $("#tb_next").click(function(){
        tb_next();
    });
});