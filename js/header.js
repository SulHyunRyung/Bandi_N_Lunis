
  //header 상단 배너 닫기
  $(function() {
      $(".remove > p").click(function() {
          $("#hd_bn").remove();
      });
  });
  
  //바로온off fadeIn
  $("#btn_on").mouseenter(function(){
      $("#offpop").stop().fadeIn("fast");
  }).mouseleave(function(){
      $("#offpop").stop().hide();
  });
  
  //나의 쇼핑 fadeIn
  $("#login > li:nth-child(5)").mouseenter(function(){
      $(".sub_log").stop().fadeIn("fast");
  }).mouseleave(function(){
      $(".sub_log").stop().hide();
  });
  
  //검생창 통합검색 fadeIn
  $("#selbox > li").mouseenter(function(){
      $(".sel_sub").stop().fadeIn("fast");
  }).mouseleave(function(){
      $(".sel_sub").stop().hide();
  });
  
  //검생창 input
  $("#mainsearch").focus(function () {
  $(this).val("");
});
  
  //장바구니 fadeIn
  $("#cart_box").mouseenter(function(){
      $("#cart").stop().fadeIn();
  }).mouseleave(function(){
      $("#cart").stop().hide();
  });
  
  //menu, sub fadeIn
  $(".menu > li:first").mouseover(function(){
      $(".sub_wrap").stop().fadeIn("fast");
  }).mouseout(function(){
      $(".sub_wrap").stop().fadeOut();
  });
