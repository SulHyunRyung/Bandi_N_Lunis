$(function(){
  function an_prev() {
      $(".another_box:last").prependTo(".another_slide");
      $(".another_slide").css({marginLeft: -1100});
      $(".another_slide").stop().animate({marginLeft: 0});
  }

  function an_next() {
      $(".another_slide").stop().animate({marginLeft: -1100}, function(){
          $(".another_box:first").appendTo(".another_slide");
          $(".another_slide").css({marginLeft: 0});
      });
  }
  $("#an_prev").click(function(){
      an_prev();
  });
  $("#an_next").click(function(){
      an_next();
  }); 
});