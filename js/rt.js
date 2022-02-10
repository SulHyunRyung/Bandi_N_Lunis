$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"습관",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


        var divs = document.getElementsByClassName('.rentbook');

        for (var i = 0; i < $(".rentbook").length; i++) {

            $(".imgbox").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".textbox").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
            $(".textbox").eq(i).append("<p>" + msg.documents[i].authors + " / " + msg.documents[0].publisher + "</p>");
            $(".textbox").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>");

        }

});

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"세트",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


        var divs = document.getElementsByClassName('.rentbook');

        for (var i = 0; i < $(".rentbook").length; i++) {

            $(".setbox").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".settext").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
            $(".settext").eq(i).append("<p>" + msg.documents[i].authors + " / " + msg.documents[0].publisher + "</p>");
            $(".settext").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>");

        }

});

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"인문학",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


        var divs = document.getElementsByClassName('.rentbook');

        for (var i = 0; i < $(".rentbook").length; i++) {

            $(".humanbox").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".humantext").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
            $(".humantext").eq(i).append("<p>" + msg.documents[i].authors + " / " + msg.documents[0].publisher + "</p>");
            $(".humantext").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>");

        }

});