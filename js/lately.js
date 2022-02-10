$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"소설",size:10},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


        var divs = document.getElementsByClassName('.lately');

        for (var i = 0; i < $(".lately").length; i++) {

            $(".lately").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".lately").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
            $(".lately").eq(i).append("<p>" + msg.documents[i].authors + "</p>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }

});