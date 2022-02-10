$(function(){
  //서브 nav
  $(".subnav_main > li").mouseover(function(){
      $(this).children(".submenu").stop().fadeIn("fast");
  }).mouseout(function(){
      $(".submenu").stop().fadeOut("fast");
  });
  
  //책소개 토글
  $(".btn_show").click(function(){
      $("#hide_intro").stop().slideDown("fast");
      $(this).css("display","none");
  });
  $(".btn_hide").click(function(){
      $("#hide_intro").stop().hide();
      $(".btn_show").css("display","block");
  });
});