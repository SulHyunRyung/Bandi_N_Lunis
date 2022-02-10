$(function(){
    //베스트리뷰
	var i = 0;

	function left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$(".review_slide ul").stop().hide();
		$(".review_slide ul").eq(i).stop().show();
		$("#review > p").text((i + 1) + "/2")

	};
	$("#rv_prev").click(function () {
		left();
	});

	var i = 0;

	function right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$(".review_slide ul").stop().hide();
		$(".review_slide ul").eq(i).stop().show();
		$("#review  > p").text((i + 1) + "/2")

	};
	$("#rv_next").click(function () {
		right();
	});
    
    //서점에서 만난 사람
	var i = 0;

	function pp_left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$(".peple_slide ul").stop().hide();
		$(".peple_slide ul").eq(i).stop().show();
		$("#people > p").text((i + 1) + "/2")

	};
	$("#pp_prev").click(function () {
		pp_left();
	});

	var i = 0;

	function pp_right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$(".peple_slide ul").stop().hide();
		$(".peple_slide ul").eq(i).stop().show();
		$("#people  > p").text((i + 1) + "/2")

	};
	$("#pp_next").click(function () {
		pp_right();
	});
    
    //100인의 큐레이션
	var i = 0;

	function cu_left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$(".cuwrap_slide ul").stop().hide();
		$(".cuwrap_slide ul").eq(i).stop().show();
		$("#curation > p").text((i + 1) + "/2")

	};
	$("#cu_prev").click(function () {
		cu_left();
	});

	var i = 0;

	function cu_right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$(".cuwrap_slide ul").stop().hide();
		$(".cuwrap_slide ul").eq(i).stop().show();
		$("#curation  > p").text((i + 1) + "/2")

	};
	$("#cu_next").click(function () {
		cu_right();
	}); 
    
    //오프라인 매장 사진
	var i = 0;

	function po_left() {
		i--;
		if (i < 0) {
			i = 1
		};
        
		$(".photo_slide ul").stop().hide();
		$(".photo_slide ul").eq(i).stop().show();
		$("#photo > p").text((i + 1) + "/3")

	};
	$("#po_prev").click(function () {
		po_left();
	});

	var i = 0;

	function po_right() {
		i++;
		if (i > 1) {
			i = 0
		};
        
		$(".photo_slide ul").stop().hide();
		$(".photo_slide ul").eq(i).stop().show();
		$("#photo > p").text((i + 1) + "/3")

	};
	$("#po_next").click(function () {
		po_right();
	});
});