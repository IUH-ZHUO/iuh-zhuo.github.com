window.onload = function() {


    var btn = document.getElementById('mouth');
    var btn2 = document.getElementById('eyel');
    var btn3 = document.getElementById('eyer');   
    var ball = document.getElementById("ball");
    var music = document.getElementById("music");
    var deg = 0;
    var speed=1;
    if (music.ended) {
        music.currentTime = 0;
        btn.style.transform = "rotateX(0deg)";
        btn2.style.transform = "rotate(0deg)";
        btn3.style.transform = "rotate(0deg)";
        clearInterval(timer1);
    }
    btn.onclick = function() {
        if (music.paused) {
            music.play();
            timer1 = setInterval(function() {
                if (deg == 360) { deg = 0; }
                if(speed==1200){ speed=0;}
                deg += 5;
                speed+=1;
                // btn.style.transform = "rotateY(" + deg + "deg)"
                btn.style.transform = "rotateX(" + deg + "deg)"
                btn2.style.transform = "rotate(" + deg + "deg)"
                btn3.style.transform = "rotate(" + deg + "deg)"
                ball.style.transform = "rotate(" + deg + "deg)"
                ball.style.left = speed+"px";  
                console.log(speed);           
            }, 100);
        } else {
            music.pause();
            clearInterval(timer1);
            // btn.style.transform = "rotateY(" + deg + "deg)"
            btn.style.transform = "rotateX(" + deg + "deg)"
            btn2.style.transform = "rotate(" + deg + "deg)"
            btn3.style.transform = "rotate(" + deg + "deg)"
        }
    }


    // var btn2 = document.getElementById('box2');
    // var music2 = document.getElementById("music2");
    // var deg2 = 0;
    // if (music2.ended) {
    //     music2.currentTime = 0;
    //     btn2.style.transform = "rotate(0deg)";
    //     clearInterval(timer2);
    // }
    // btn2.onclick = function() {
    //     if (music2.paused) {
    //         music2.play();
    //         timer2 = setInterval(function() {
    //             if (deg2 == 360) { deg2 = 0; }
    //             deg2 += 5;
    //             btn2.style.transform = "rotate(" + deg2 + "deg)"
    //         }, 100);
    //     } else {
    //         music2.pause();
    //         clearInterval(timer2);
    //         btn2.style.transform = "rotate(" + deg2 + "deg)"
    //     }
    // }


    // var btn3 = document.getElementById('box3');
    // var music3 = document.getElementById("music3");
    // var deg3 = 0;
    // if (music3.ended) {
    //     music3.currentTime = 0;
    //     btn3.style.transform = "rotate(0deg)";
    //     clearInterval(timer3);
    // }
    // btn3.onclick = function() {
    //     if (music3.paused) {
    //         music3.play();
    //         timer3 = setInterval(function() {
    //             if (deg3 == 360) { deg3 = 0; }
    //             deg3 += 5;
    //             btn3.style.transform = "rotate(" + deg3 + "deg)"
    //         }, 100);
    //     } else {
    //         music3.pause();
    //         clearInterval(timer3);
    //         btn3.style.transform = "rotate(" + deg3 + "deg)"
    //     }
    // }



}