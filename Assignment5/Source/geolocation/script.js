/**
 * Created by ash on 7/13/17.
 */
var APPID ="e8af413c6d27ca7824587e11c7af0ef2";
var temp;
var locate;
function updateByZip1(zip){
    var url="http://api.openweathermap.org/data/2.5/weather?"+
        "zip=" +zip+
        "&APPID=" +APPID;
    sendRequest(url);
}
function updateByZip2(zip){
    var url="http://api.openweathermap.org/data/2.5/weather?"+
        "zip=" +zip+
        "&APPID=" +APPID;
    sendRequest(url);
}
function updateByCity(City){
    var url="http://api.openweathermap.org/data/2.5/weather?q="+
        "city"+city+
        "&APPID=" +APPID;
    sendRequest(url);
}
function sendRequest(url){
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange= function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data =JSON.parse(xmlhttp.responseText);
            var weather={};
            weather.locate=data.name;
            weather.temp=data.main.temp;
            update(weather);
        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function update(weather){
    temp.innerHTML=weather.temp;
    locate.innerHTML=weather.locate;
}
window.onload=function(){
    temp=document.getElementById("temperature");
    locate=document.getElementById("location");
    updateByZip1("64110");
    updateByZip2("64116");
}