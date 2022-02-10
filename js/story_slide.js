$(function(){
    function nd_prev() {
		$(".nd_grid > li:last").prependTo(".nd_grid");
		$(".nd_grid").css({marginLeft: -420});
		$(".nd_grid").stop().animate({marginLeft: 0});
	}

	function nd_next() {
		$(".nd_grid").stop().animate({
			marginLeft: -420
		}, function(){
			$(".nd_grid > li:first").appendTo(".nd_grid");
			$(".nd_grid").css({marginLeft: 0});
		});
	}

    $("#nd_prev").click(function(){
        nd_prev();
    });
    $("#nd_next").click(function(){
        nd_next();
    });
});