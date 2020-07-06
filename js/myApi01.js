var reqURLget = "https://v1.alapi.cn/api/eventHitory";
var reqURLpost = "http://111.229.76.217/api.php";
var reqData = {
    "action": "query",
    "format": "json"
};

function myRequestPost() {
    $.post(reqURLpost, reqData
        , function (data, status) {
            $("#apiTest").text("success");
        });
}

function myRequestGet() {
    $.get(reqURLget, function (data, state) {
        $("#apiTest").text("success");
    });
}

$(document).ready(function () {
    myRequestPost();
});
