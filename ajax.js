var yourKey = "5564a7533e8ae77ae3a2611cb2908f4b";
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";


$(document).ready(function() {

    $.ajax({
        url: weatherUrl + "Zip=11385,us&APPID=" +key,
        dataType:"json",
        success:function (data){
            console.log(data);
        }
    });
});
