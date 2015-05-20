$(document).ready(function () {
    us = $("#u_suixu")
    function banBackSpace(event) {
        var codenum =  event.keyCode;
        switch (codenum){
            case 87:
                us.css("top","-=10px");
                send(JSON.stringify({x:us.css("left"), y:us.css("top")}));
                break;
            case 83:
                us.css("top","+=10px")
                send(JSON.stringify({x:us.css("left"), y:us.css("top")}));
                break;
            case 65:
                us.css("left","-=10px")
                send(JSON.stringify({x:us.css("left"), y:us.css("top")}));
                break;
            case 68:
                us.css("left","+=10px")
                send(JSON.stringify({x:us.css("left"), y:us.css("top")}));
                break;
        }
    }

    document.onkeypress = banBackSpace;
    document.onkeydown = banBackSpace;

    var socket = new WebSocket('ws://' + window.location.host + '/App/Socket')

    socket.onerror = function (e) {
        console.log("竟然出错了")
    };
    socket.onclose = function (e) {
        console.log("断线了")
    };
    socket.onmessage = function (event) {
        console.log("服务器来消息了")
    }

    var send = function (count) {
        socket.send(count);
    }

});
