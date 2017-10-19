$(function() {

    var canvas = document.getElementById('donghua');
    var context = canvas.getContext("2d");
    var buttonArr = document.getElementsByTagName('button');

    function Sprite(option) {
        this._init(option);
    }
    Sprite.prototype = {
        _init: function(option) {
            if (option) {
                this.sWidth = option.sWidth || 0;
                this.sHeight = option.sHeight || 0;
                this.ImgSrc = option.ImgSrc || "";
                this.dir = option.dir || 0;
                this.width = option.width || 0;
                this.height = option.height || 0;
                this.x = option.x || 0;
                this.y = option.y || 0;
                this.speedX = option.speedX || 0;
                this.speedY = option.speedY || 0;
            }
        },
        draw: function(ctx) {
            var pp = new Image();
            pp.src = this.ImgSrc;
            var that = this;
            pp.onload = function() {
                var animationIndex = 0;
                var x = that.x;
                var y = that.y;
                var timer = setInterval(function() {
                    x += that.speedX;
                    y += that.speedY;
                    ctx.clearRect(x, y, that.width + 1, that.height + 5);
                    ctx.drawImage(pp,
                        that.sWidth * animationIndex,
                        that.sHeight * that.dir,
                        that.sWidth,
                        that.sHeight,
                        x,
                        y,
                        that.width,
                        that.height);
                    animationIndex++;
                    animationIndex %= 4;
                }, 120);
            }
        },
        changeDir: function(dd, ee, ff) {
            this.dir = dd;
            this.speedX = ee;
            this.speedY = ff;
        }
    };

    var p1 = new Sprite({
        sWidth: 40,
        sHeight: 65,
        ImgSrc: "images/mm.png",
        dir: 0,
        width: 40,
        height: 65,
        x: 100,
        y: 100,
        speedX: 0,
        speedY: 0
    });
    p1.draw(context);
    for (var i = 0; i < buttonArr.length; i++) {
        buttonArr[i].onmousedown = function() {
            if (this.dataset.target == "up") {
                p1.changeDir(3, 0, -5);
            } else if (this.dataset.target == "down") {
                p1.changeDir(0, 0, 5);
            } else if (this.dataset.target == "left") {
                p1.changeDir(1, -5, 0);
            } else if (this.dataset.target == "right") {
                p1.changeDir(2, 5, 0);
            }
            this.onmouseup = function() {
                p1.changeDir(0, 0, 0);
            }

        }
    }

    $('.xiaobing').click(function(event) {

        var event = event ? event : window.event;
        if (event.stopPropagation) {
            // w3c 标准
            event.stopPropagation();
            //IE 6 7 8浏览器
        } else {
            event.cancelBubble = true;
        }
      
    })
})