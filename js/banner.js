$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Do it"
        },
        headers: {
            Authorization: "KakaoAK 1f605b6be0df3d327e6c6738e09ebbb2"
        }
    })
    .done(function (msg) {

        $("#noticbn").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#noticbn").append("<h3>" + msg.documents[0].title + "</h3>");
        $("#noticbn").append("<h5>" + msg.documents[0].authors[0] + " / " + msg.documents[0].publisher + "</h5>");
    
        var str = msg.documents[0].contents;
        var str2 = str.substring(0, 20);

        $("#noticbn").append("<h6>" + str2 + "...</h6>");
    
    });