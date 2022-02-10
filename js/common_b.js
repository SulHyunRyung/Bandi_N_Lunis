//일간
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"지혜",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('bbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".daybox > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".daybox > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".daybox > li").eq(i).append("<p>" + msg.documents[i].authors +"</p>");
        $(".daybox > li").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>")

    }

});

//일간
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"노력",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('bbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".weekbox > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".weekbox > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".weekbox > li").eq(i).append("<p>" + msg.documents[i].authors +"</p>");
        $(".weekbox > li").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>")

    }

});

//월간
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"성취",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('bbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".monbox > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".monbox > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".monbox > li").eq(i).append("<p>" + msg.documents[i].authors +"</p>");
        $(".monbox > li").eq(i).append("<h5>" + "<em>" + "구매 " + "</em>" + msg.documents[i].price + "</h5>")

    }

});