$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: {
      query: "포르토벨로"
  },
  headers: {
      Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
  }
})
.done(function (msg) {

  $(".edite").append("<img src='" + msg.documents[0].thumbnail + "'/>");
  $(".edite").append("<h3>" + msg.documents[0].title + "</h3>");
  $(".edite").append("<h5>" + msg.documents[0].authors[0] + " / " + msg.documents[0].publisher + "</h5>");

  var str = msg.documents[0].contents;
  var str1 = str.substring(0, 250);

  $(".edite").append("<p>" + str1 + "...</p>");

});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: {query:"기억",size:2},
  headers: {
      Authorization: "KakaoAK a34d6a1fd0591e576c4be4b080ce34bb"
  }
})
.done(function (msg) {


  var divs = document.getElementsByClassName('.mdbook');

  for (var i = 0; i < $(".mdbook").length; i++) {

      $(".mdbook").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
      $(".mdbook").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 99);

      $(".mdbook").eq(i).append("<p>" + str2 + "..." + "</p>");
      $(".mdbook").eq(i).append();

  }

});