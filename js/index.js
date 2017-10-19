window.onload = function() {


    // -------------------------via------------------------

    var viaImg = document.getElementById("viaImg");

    var stage = new Konva.Stage({
        container: 'via',
        width: 100,
        height: 100
    });
    var layer2 = new Konva.Layer({});
    stage.add(layer2);
    var data = [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125];
    var colors = ['rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)'];
    var startAngle = -90;
    // console.log(colors[1]);
    data.forEach(function(v, i) {
        var wedge = new Konva.Wedge({
            x: 50,
            y: 50,
            radius: 50,
            angle: 360 * v,
            rotation: startAngle,
            fill: colors[i],
            draggable: true
        });
        startAngle += 360 * v;

        layer2.add(wedge);
        viaImg.onmouseenter = function() {
            wedge.parent.children.forEach(function(v, i) {
                if (i % 2) {
                    v.to({
                        rotation: -720 + v.attrs.rotation,
                        duration: 2
                    });
                } else {
                    v.to({
                        rotation: 720 + v.attrs.rotation,
                        duration: 2
                    });
                }
            })
        }
    });
    layer2.draw();

    // div -hello
    setTimeout(function() {
        $('div.hello').slideDown('slow');
    }, 500);


    // 




    // 点击到下一层
    $("span#morecases").click(function() {
        var thatTop = parseInt($('#topBar').css('height'));
        moveTo(0, thatTop);

    });
    function diandian(){
        // console.log(this);
        $("span#morecases").animate({
            'bottom':'80'
        },500,function(){
            $('span.water1').fadeOut();
            $("span#morecases").animate({
            'bottom':'100'
        },300)
        });
        $('span.water1').fadeIn();
    }
    setTimeout(function(){ 
    diandian();
    },1000);


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

    //middle部分的case宽高比
    // var middle = document.getElementById('middle');
    // middle.style.height=middle.offsetWidth/2+"px";

    //
var bius = document.getElementsByClassName('biu');
// console.log(bius);
    for(var i = 0;i<bius.length ;i++){
        bius[i].onclick=function(event){
            var deg = 0;
            var that =this;
            // console.log(that.children[1]);
            // console.log(that.children[0]);
            // console.log(that.children[1]);
            var trans =setInterval(function(){
                deg+=10;
                that.style.transform="rotateY("+deg+"deg)";
                that.children[1].style.transform="rotateY("+deg+"deg)";
                that.children[0].style.transform="rotateY("+deg+"deg)";
                if(deg===90){
                    if(that.children[0].style.display==='none'){
                    that.children[1].style.display='none';
                    that.children[0].style.display='block';
                    }else{      
                    that.children[0].style.display='none';
                    that.children[1].style.display='block';
                    }   
                }
                if(deg===180){
                    clearInterval(trans);
                }
            },50)
        
        }
    }
     
    // $('#random').click(function(){
    //     var num =Math.floor((Math.random()*10));
    //     $('.amaz').each(function(){
    //             $(this).fadeOut();
    //          })
    //     $($('.amaz')[num]).fadeIn();
    // })

    // $("#prevPage").click(function(){
    //     var fire =0;
    //    $('.amaz').each(function(index){
    //     if($(this).css('display')==='block'){
    //         fire=index;
    //     }
    //         $(this).fadeOut();
    //     })
    //    if(fire<0){
    //      fire=3;
    //    }
    //     $($('.amaz')[fire-1]).fadeIn();
    // });
    // $("#nextPage").click(function(){
    //     var fire =0;
    //    $('.amaz').each(function(index){
    //     if($(this).css('display')==='block'){
    //         fire=index;
    //     }
    //         $(this).fadeOut();
    //     })
    //    if(fire>2){
    //      fire=-1;
    //    }
    //     $($('.amaz')[fire+1]).fadeIn();
    // });
    


    $('.card').each(function(index){
        $(this).click(function(){
        $('.amaz').each(function(){
                $(this).fadeOut();
             })
        $($('.amaz')[index]).fadeIn();
    })
    })




    //


    //调整span的位置
    var fonts = document.getElementsByClassName('subject');
    var cases = document.getElementsByClassName('case');
    // for(var i = 0; i<cases.length;i++){
    //     cases[i].onmouseover=function(){
    //         var spanWidth=this.getElementsByClassName('subject')[0].offsetWidth;
    //         var spanHeight=this.getElementsByClassName('subject')[0].offsetHeight;
    //         this.getElementsByClassName('subject')[0].style.marginLeft=-spanWidth/2+'px';
    //         this.getElementsByClassName('subject')[0].style.marginTop=-spanHeight/2+'px';
    //         this.getElementsByClassName('subject')[0].style.left='50%';
    //         this.getElementsByClassName('subject')[0].style.top='50%';
    //     }

    // }

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



}


//---------------------------------------------

//