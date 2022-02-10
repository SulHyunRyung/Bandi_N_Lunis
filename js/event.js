$(function(){
    function top_prev() {
        $(".topbox:last").prependTo(".giftimg_slide");
        $(".giftimg_slide").css({marginLeft: -1100});
        $(".giftimg_slide").stop().animate({marginLeft: 0});
    }

    function top_next() {
        $(".giftimg_slide").stop().animate({marginLeft: -1100}, function(){
            $(".topbox:first").appendTo(".giftimg_slide");
            $(".giftimg_slide").css({marginLeft: 0});
        });
    }
    $("#top_prev").click(function(){
        top_prev();
    });
    $("#top_next").click(function(){
        top_next();
    });
});