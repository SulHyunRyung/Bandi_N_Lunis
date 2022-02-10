$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"여자",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('issue');


    for (var i = 0; i < boxs.length; i++) {

        $(".issuebox > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".issuebox > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".issuebox > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});