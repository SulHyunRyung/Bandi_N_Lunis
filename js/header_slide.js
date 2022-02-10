// 슬라이더 배경
$(function () {
  var i = 0;

  $(".tap_list li").mouseenter(function () {
      i = $(this).index()
  })

  function slide() {

      i++;

      if (i > $(".event_sd li:last").index()) {
          i = 0;
      }
      $(".event_sd>li").eq(i).stop().show();
      $(".event_sd>li").eq(i - 1).stop().hide();

      if (i == 1) {
          $("#slide").css({
              "background": "rgb(66, 164, 189)"
          });
          $(".tap_list li").eq(i - 1).css({
              color: "#666"
          });

          $(".tap_list li").eq(i).css({
              color: "rgb(66, 164, 189)"
          });

      } else if (i == 2) {
          $("#slide").css({
              "background": "rgb(68, 158, 96)"
          });
          $(".tap_list li").eq(i - 1).css({
              color: "#666"
          });

          $(".tap_list li").eq(i).css({
              color: "rgb(68, 158, 96)"
          });

      } else if (i == 3) {
          $("#slide").css({
              "background": "rgb(233, 123, 74)"
          });
          $(".tap_list li").eq(i - 1).css({
              color: "#666"
          });

          $(".tap_list li").eq(i).css({
              color: "rgb(233, 123, 74)"
          });

      } else {
          $("#slide").css({
              "background": "rgb(113, 113, 213)"
          });
          $(".tap_list li").eq(i - 1).css({
              color: "#666"
          });
          $(".tap_list li").eq(i).css({
              color: "rgb(113, 113, 213)"
          });
      }
  }

  // 슬라이더 메뉴
  $(".tap_list li").eq(0).mouseover(function () {
      var i = 0;
      $("#slide").css({
          "background": "rgb(113, 113, 213)"
      });
      $(".tap_list li").css({
          color: "#666"
      });
      $(this).css({
          color: "rgb(113, 113, 213)"
      });
      $(".event_sd li").stop().hide();
      $(".event_sd li").eq(0).stop().show();
  });

  $(".tap_list li").eq(1).mouseenter(function () {
      var i = 0;
      $("#slide").css({
          "background": "rgb(66, 164, 189)"
      });
      $(".tap_list li").css({
          color: "#666"
      });
      $(this).css({
          color: "rgb(66, 164, 189)"
      });
      $(".event_sd li").stop().hide();
      $(".event_sd li").eq(1).stop().show();
  });

  $(".tap_list li").eq(2).mouseenter(function () {
      var i = 0;
      $("#slide").css({
          "background": "rgb(68, 158, 96)"
      });
      $(".tap_list li").css({
          color: "#666"
      });
      $(this).css({
          color: "rgb(68, 158, 96)"
      });
      $(".event_sd li").stop().hide();
      $(".event_sd li").eq(2).stop().show();
  });

  $(".tap_list li").eq(3).mouseenter(function () {
      var i = 0;
      $("#slide").css({
          "background": "rgb(233, 123, 74)"
      });
      $(".tap_list li").css({
          color: "#666"
      });
      $(this).css({
          color: "rgb(233, 123, 74)"
      });
      $(".event_sd li").stop().hide();
      $(".event_sd li").eq(3).stop().show();
  });

  var ani = setInterval(slide, 6000)

  $(".tap_list li").mouseover(function () {
      clearInterval(ani);
  });

  $(".tap_list li").mouseout(function () {
      $(this).css({
          color: "666"
      });
      ani = setInterval(slide, 6000);
  });
});