//전체
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"시간",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box1 > li").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box1 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box1 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//소설
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"소설",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box2 > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box2 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box2 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//인문학
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"인문학",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box3 > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box3 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box3 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//인문학
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"에세이",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box4 > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box4 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box4 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//자기계발
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"자기 계발",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box5 > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box5 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box5 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});

//여행, 취미
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"취미",size:20},
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {


    var boxs = document.getElementsByClassName('nbox');


    for (var i = 0; i < boxs.length; i++) {

        $(".new_box6 > li").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".new_box6 > li").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".new_box6 > li").eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }

});