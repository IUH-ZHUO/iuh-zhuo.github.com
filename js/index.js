window.onload = function() {


    var btn = document.getElementById('mouth');
    var btn2 = document.getElementById('eyel');
    var btn3 = document.getElementById('eyer');
    var ball = document.getElementById("ball");
    var music = document.getElementById("music");
    var text = document.getElementById("me");
    var deg = 0;
    var speed = 1;

    btn.onclick = function() {
        if (music.paused) {
            music.play();
            timer1 = setInterval(function() {
                if (deg == 360) { deg = 0; }
                if (speed == 1200) {
                    speed = 0;
                    // text.style.color="red";
                }
                deg += 5;
                speed += 1;
                // btn.style.transform = "rotateY(" + deg + "deg)"
                btn.style.transform = "rotateX(" + deg + "deg)"
                btn2.style.transform = "rotate(" + deg + "deg)"
                btn3.style.transform = "rotate(" + deg + "deg)"
                ball.style.transform = "rotate(" + deg + "deg)"
                ball.style.left = speed + "px";
                text.style.top = -speed + "px";
                console.log(speed);
                if (music.ended) {
                    console.log("end");
                    music.currentTime = 0;
                    btn.style.transform = "rotateX(0deg)";
                    btn2.style.transform = "rotate(0deg)";
                    btn3.style.transform = "rotate(0deg)";
                    console.log(text.style.top);
                    ball.style.left = "0px";
                    text.style.top = "0px";
                    clearInterval(timer1);
                }
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




}