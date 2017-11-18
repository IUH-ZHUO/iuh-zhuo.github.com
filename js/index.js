$(function() {
    // $('#middleDown').css({ display: 'none' });


    // -------------------------via------------------------

    // var viaImg = document.getElementById("viaImg");

    // var stage = new Konva.Stage({
    //     container: 'via',
    //     width: 100,
    //     height: 100
    // });
    // var layer2 = new Konva.Layer({});
    // stage.add(layer2);
    // var data = [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125];
    // var colors = ['rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)'];
    // var startAngle = -90;
    // // console.log(colors[1]);
    // data.forEach(function(v, i) {
    //     var wedge = new Konva.Wedge({
    //         x: 50,
    //         y: 50,
    //         radius: 50,
    //         angle: 360 * v,
    //         rotation: startAngle,
    //         fill: colors[i],
    //         draggable: true
    //     });
    //     startAngle += 360 * v;

    //     layer2.add(wedge);
    //     viaImg.onmouseenter = function() {
    //         wedge.parent.children.forEach(function(v, i) {
    //             if (i % 2) {
    //                 v.to({
    //                     rotation: -720 + v.attrs.rotation,
    //                     duration: 2
    //                 });
    //             } else {
    //                 v.to({
    //                     rotation: 720 + v.attrs.rotation,
    //                     duration: 2
    //                 });
    //             }
    //         })
    //     }
    // });
    // layer2.draw();

    // div -hello
    setTimeout(function() {
        $('div.hello').slideDown('slow');
    }, 500);


    // 




    // 点击到下一层
    $("span#morecases").click(function() {
        var thatTop = parseInt($('#topBar').css('height'));
        moveTo(0, thatTop + 10);

    });

    function diandian() {
        // console.log(this);
        $("span#morecases").animate({
            'bottom': '80'
        }, 500, function() {
            $('span.water1').fadeOut();
            $("span#morecases").animate({
                'bottom': '100'
            }, 300)
        });
        $('span.water1').fadeIn();
    }
    setTimeout(function() {
        diandian();
    }, 1000);


    // 点击返回顶部栏
    $("span#backToTop").click(function() {
        var spanT = scroll().top;
        moveTo(spanT, 0);
    });
    // 获取当前屏幕位置函数
    function scroll() {
        var x;
        var y;
        if (window.pageYOffset || window.pageXOffset) {
            x = window.pageXOffset;
            y = window.pageYOffset;
        } else if (document.compatMode == "CSS1Compat") {
            x = document.documentElement.scrollLeft;
            y = document.documentElement.scrollTop;
        } else {
            x = document.body.scrollLeft;
            y = document.body.scrollTop;
        }
        return {
            left: x,
            top: y
        };
    }
    // var timer11;
    // window.onscroll = function() {
        // if (scroll().top = 900) {
            // console.log(1);
            // $('#middleDown').css({ display: 'block' });
            // $('#middleDown').trigger('click');
        // }
    // }


    // $('#middleDown').click(function() {
        // $('.con').each(function(index) {
        //     $(this).css({
        //         'left': index * parseInt($(this).css('width'))
        //     });
        // });
        // var timer11 = setInterval(function() {
            $('#middleDown').click(function(){
                $('.con').each(function(index) {
                if ($(this).css('display') ==='none') {
                   $(this).css({'display':'flex'});
                } else {
                  $(this).css({'display':'none'});
                }
            })
            })
            
        // }, 80);
    // })
    
    // 上下移动屏幕函数 :当前值　／目标值
    var moveTimer;

    function moveTo(current, target) {　　
        clearInterval(moveTimer);　
        moveTimer = setInterval(function() {
            if (current > target) {
                var now = current;
                current = current - (current - target) / 10;
                window.scrollTo(now, current);
                if (Math.abs(current - target) < 10) {
                    window.scrollTo(current, target);
                    clearInterval(moveTimer);
                }
            } else {
                var now = current;
                current = current + (target - current) / 10;
                window.scrollTo(now, current);
                if (Math.abs(target - current) < 10) {
                    window.scrollTo(target, current);
                    clearInterval(moveTimer);
                }
            }
        }, 50);

    }

    // 



    // 联系栏


    setTimeout(function() {
        var mine = document.getElementById('mine');
        var boxArr = document.getElementsByClassName('ball');
        var fives = document.getElementsByClassName('five');
        var tubiao = ['icon-phone', 'icon-tux', 'icon-bubbles3', 'icon-sina-weibo', 'icon-cloud2']
        var lianxi = ['电话', 'QQ', '微信', '微博', '网易'];
        for (var i = 0; i < boxArr.length; i++) {
            boxArr[i].innerHTML = '<span >' + lianxi[i] + '</span>';
            boxArr[i].index = i;
            boxArr[i].onclick = function() {
                var that = this.index;
                for (var j = 0; j < fives.length; j++) {
                    fives[j].style.display = 'none';
                    fives[that].style.display = 'block';
                }
            }
        }
    }, 1000);


    $("#showbtn").click(function() {
        if ($('#intouch').css('width') === '50px') {
            $('#intouch').animate({ 'width': '350px' });
        } else {
            $('#intouch').animate({ 'width': '50px' });
        }
        $('#intouch').find("#me").fadeToggle();
        $(".ball").each(function() {
            $(this).fadeToggle();
        })
    })

    // var colorDatas=['deeppink','seagreen','darkblue','orange','brown','skublue','deeppink','seagreen','darkblue','orange','brown','skublue']
    var round = document.getElementById('round');
    var axiba = document.getElementsByClassName('axiba');
    var deg = 0;
    var opa = 0.4;
    var timer11 = setInterval(function() {
        var axiba2 = document.createElement('div');
        axiba2.className = 'axiba';
        round.appendChild(axiba2);
        deg += 30;
        opa += 0.05;
        axiba2.style.transform = 'rotate(' + deg + 'deg)';
        axiba2.style.opacity = opa;
        // axiba2.style.backgroundColor=colorDatas[deg/30-1];
        var axibaLen = axiba.length;
        var data = [1, 2, 3];
        if (axiba.length > 12) {
            deg = 0;
            opa = 0.4;
            $('div').remove('.axiba');
        }
    }, 150);

    $('section.case2').fadeIn();
    // $('section#middleDown').fadeIn()     


})


//---------------------------------------------

//