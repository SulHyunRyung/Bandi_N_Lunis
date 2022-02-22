$(function(){    
  //기대신간 전체 슬라이드
  function is_prev() {
      $(".issuebox:last").prependTo(".issue_slide");
      $(".issue_slide").css({marginLeft: -1100});
      $(".issue_slide").stop().animate({marginLeft: 0});
  }

  function is_next() {
      $(".issue_slide").stop().animate({marginLeft: -1100}, function(){
          $(".issuebox:first").appendTo(".issue_slide");
          $(".issue_slide").css({marginLeft: 0});
      });
  }
  $("#is_prev").click(function(){
      is_prev();
  });
  $("#is_next").click(function(){
      is_next();
  });
});