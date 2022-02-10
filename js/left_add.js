// 왼쪽배너 vol움직임
$(function () {
	function img(){
		$(".lbn").stop().animate({marginLeft: "55px",},600)
			.animate({marginLeft: "35px"},600);
	};

	setInterval(img, 600);
});