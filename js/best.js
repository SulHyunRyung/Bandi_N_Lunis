//비건 라이프
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"비건 라이프",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('themebook');


    for (var i = 0; i < boxs.length; i++) {

        $("#vegan > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#vegan > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $("#vegan > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//아동
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"어린이 한국사",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('themebook');


    for (var i = 0; i < boxs.length; i++) {

        $("#kids > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#kids > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $("#kids > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//시간여행 소설
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"시간여행 소설",size:50},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('themebook');


    for (var i = 0; i < boxs.length; i++) {

        $("#time > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#time > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $("#time > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//베스트셀러
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "휴먼카인드"
        },
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {

        $(".bnbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".bnbox").append("<p>" + "모든 비극은<br> 인간 본성에 대한<br> 오해에서 시작되었다" + "</p>");

});