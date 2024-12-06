$(function() {
    $("#change-color").on("click",function() {
        const fontColor = $("#target").css("color");
        if (fontColor == "rgb(0, 0, 0)") {
            $("#target").css("color","red");
        } else {
            $("#target").css("color","black");
        };
    });
    $("#change-text").on("click",function() {
        const textContent = $("#target").text();
        if (textContent == "こんにちは！") {
            $("#target").text("Hello World");
        } else {
            $("#target").text("こんにちは！");
        };
    });

    $("#fade-out").on("click",function() {
        $("#target").fadeOut();
    });
    $("#fade-in").on("click",function() {
        $("#target").fadeIn();
    })

});