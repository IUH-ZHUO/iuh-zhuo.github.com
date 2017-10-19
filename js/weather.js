
var btn = document.getElementById("search");
var city = document.getElementById("city");
var weather = document.getElementById("weather");
var five = document.getElementById("five");

function smartloaddata(data) {
    let area = data.area;
    let pm = data.pm25.pm25;
    let today = data.weather[0].date;
    let baitian = data.weather[0].info.day;
    var weatherStr = baitian[1];
    var dayw = document.getElementById('dayw');
    for (var i = 0; i < baitian[1].length; i++) {
        var wtemp = weatherStr.substr(i, 1);
        if (wtemp === '雨') {
            dayw.className = 'weather-rainy2';
            $('.tianqi').css('background','linear-gradient(to right bottom,lightgrey ,#eee)');
            $('.fivedays').css('background','linear-gradient(to right bottom,lightgrey ,#eee)');
        }else if(wtemp === '云'){
            dayw.className = 'weather-cloud2';
             $('.tianqi').css('background','linear-gradient(to bottom,skyblue,lightseagreen)');
            $('.fivedays').css('background','linear-gradient(to bottom,skyblue,lightseagreen)');
        }else if(wtemp === '晴'){
            dayw.className = 'weather-sun';
            $('.tianqi').css('background','linear-gradient(to right bottom, lightgreen, lightseagreen)');
            $('.fivedays').css('background','linear-gradient(to right bottom, lightgreen, lightseagreen)');
        }else if(wtemp === '阴'){
            dayw.className = 'weather-cloud5';
             $('.tianqi').css('background','linear-gradient(to  bottom,skyblue,lightseagreen)');
            $('.fivedays').css('background','linear-gradient(to  bottom,skyblue,lightseagreen)');
        }else{
            dayw.className = 'weather-lines';
            $('.tianqi').css('background','linear-gradient(to right bottom, lightgreen, lightseagreen)');
            $('.fivedays').css('background','linear-gradient(to right bottom, lightgreen, lightseagreen)');
        }
    }
    var weathernStr = data.weather[0].info.night[1];
    var nightw = document.getElementById('nightw');
    for (var i = 0; i < data.weather[0].info.night[1].length; i++) {
        var wtemp2 = weathernStr.substr(i, 1);
        if (wtemp2 === '雨') {
            nightw.className = 'weather-rainy2';
        }else if(wtemp2 === '云'){
            nightw.className = 'weather-cloud2';
        }else if(wtemp2 === '晴'){
            nightw.className = 'weather-sun';
        }else if(wtemp === '阴'){
            nightw.className = 'weather-cloud5';
        }
    }
    let night = data.weather[0].info.night;
    let tag = "";
    tag += `<li class='tem'>${baitian[2]}℃</li>`;
    tag += `<li>${area[1][0]}</li>`;
    tag += `<li>${today}</li>`;
    // tag += `<li>pm2.5指数 : ${pm[0]}</li>`;
    tag += `<li>白天:${baitian[1]}</li>`;
    // tag += `<li>风向:${baitian[4]}</li>`;
    tag += `<li>夜晚:${night[1]}</li>`;
    tag += `<li>气温:${night[2]}℃</li>`;
    weather.innerHTML += tag;


    let tag2 = "";
    let days = data.weather;
    for (let item of days) {
        tag2 += `<li>${item.date}</li>`;
        tag2 += `<li>${item.info.day[1]}</li>`;
        tag2 += `<li>${item.info.day[2]}℃</li>`;
        tag2 += `<li>${item.info.day[4]}</li>`;
    }
    five.innerHTML += tag2;
}

city.onchange = function() {
    weather.innerHTML = "";
    five.innerHTML = "";
    let url = "http://cdn.weather.hao.360.cn/api_weather_info.php?app=hao360&_jsonp=smartloaddata&code=" + city.value;
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    console.log(script);
}
$('#city').trigger('onchange');
$("#search").click(function(){
    $(".fivedays").fadeToggle();
})


//冒泡
   $('#myweather').click(function(event){
            var event = event ? event : window.event;
            if (event.stopPropagation) {
                // w3c 标准
                event.stopPropagation();
                //IE 6 7 8浏览器
            } else {
                event.cancelBubble = true;
            }
            // console.log(event);
    })
