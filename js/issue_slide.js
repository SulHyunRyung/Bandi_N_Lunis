$(function(){    
  //비건, 아동, 소설 슬라이드
  function tm_prev() {
      $(".themebox:last").prependTo(".vegan_slide");
      $(".vegan_slide").css({marginLeft: -670});
      $(".vegan_slide").stop().animate({marginLeft: 0});
  }

  function tm_next() {
      $(".vegan_slide").stop().animate({marginLeft: -670}, function(){
          $(".themebox:first").appendTo(".vegan_slide");
          $(".vegan_slide").css({marginLeft: 0});
      });
  }
  $("#tm_prev").click(function(){
      tm_prev();
  });
  $("#tm_next").click(function(){
      tm_next();
  });
  
  //베스트 셀러 순위
  function tap_b() {
      $("#list li:last").prependTo("#list_slide");
      $("#list_slide").css({marginLeft: -220});
      $("#list_slide").stop().animate({marginLeft: 0});
  }

  function tap_g() {
      $("#list_slide").stop().animate({marginLeft: -220}, function(){
          $("#list li:first").appendTo("#list_slide");
          $("#list_slide").css({marginLeft: 0});
      });
  }
  $("#tap_b").mouseenter(function(){
      tap_b();
      (this).css({color: "#4169E1"});
  });
  $("#tap_g").mouseenter(function(){
      tap_g();
      (this).css({color: "#4169E1"});
  });
});