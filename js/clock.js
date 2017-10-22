        $(function(){


 //        var now = document.getElementById("now");
	// console.log(now);
	var canvas=document.getElementById('clock');
	var context= canvas.getContext("2d");

        setInterval(function(){
        var date =new Date();
        var  hours = date.getHours()%12;
        var  minutes= date.getMinutes();
        var  seconds= date.getSeconds();

        var sAngles =(Math.PI/30)*seconds;
        var hAngles =(Math.PI/30)*minutes;
        var mAngles =(Math.PI/6)*hours;

        context.beginPath();
        context.lineWidth=2; 
        context.clearRect(0,0,120,120);
        context.arc(50,50,40,-Math.PI/2,-Math.PI/2+sAngles,false);
        context.strokeStyle="white";
        context.stroke();

        context.beginPath();
        context.arc(50,50,30,-Math.PI/2,-Math.PI/2+mAngles,false);
        context.stroke();

        context.beginPath();
        context.arc(50,50,20,-Math.PI/2,-Math.PI/2+hAngles,false);
        context.stroke();
        context.beginPath();
        },500);


        var jishi= function(){
           var rili=document.getElementsByClassName('rili')[0];
           var date_p=rili.getElementsByTagName("p")[0];
           var time_p=rili.getElementsByTagName("p")[1];
           var day_p=rili.getElementsByTagName("p")[2];
           // console.log(day_p);
           //获取日期对象
           var now =new Date();
           // console.log(now);
           //获取的星期几是一个数字  所以要建立一个数组 
           var week=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
           date_p.innerHTML= now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+'&nbsp'+week[now.getDay()];
           time_p.innerHTML=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
           day_p.innerHTML=now.getDate();
       }
       var timer33=setInterval(jishi,1000);
 })