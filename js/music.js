 $(function(){


 var music = document.getElementById('music');
    var musicList = ['Be With you', 'Beauty', 'Time', 'Reign', 'survivor', 'The Party Troll'];

    //换主题颜色
    var colorList = ['#ec0202','lightseagreen', 'darkblue', 'darkred', 'darkcyan', 'silver'];
    var colorIndex = -1;;
    $('div.color').click(function() {
        if (colorIndex > colorList.length) {
            colorIndex = 0;
        }
        colorIndex += 1;
        $(this).find('i').css({ 'color': colorList[colorIndex] });
        $('.musicPlayer').css({ 'border-color': colorList[colorIndex] });
        $('#email').css({'color':colorList[colorIndex]});
        $('#email').find('i').css({'color':colorList[colorIndex]});
    });
    $('div.color').trigger('click');
    //点击显示歌曲列表
    $('#showList').click(function() {
        var zshHeight = $("#zshMusic").css('height') === '200px' ? '400' : '200';
        if ($(".songList").css('display') === 'none') {
            $(".songList").fadeIn();
        } else {
            $(".songList").fadeOut();
        }
        $("#zshMusic").animate({ 'height': zshHeight });
    })




    //点击切换上一首/下一首歌曲
    var zsh = 0;
    $("#nextmusic").click(function() {
        zsh += 1;
        if (zsh > 4) {
            zsh = 0;
        }
        changeMusic(zsh);
    });

    $("#prevmusic").click(function() {
        zsh -= 1;
        if (zsh < 0) {
            zsh = 4;
        }
        changeMusic(zsh);
    });


    //点击歌名更改音乐
    $(".songName").each(function(index) {
        $(this).dblclick(function() {
            changeMusic(index);
        })
    })


    //更改音乐名称
    function changeMusicName(index) {
        console.log(music);
        $('span#thisSong').text(musicList[index]);
    }

    function showMusicTime(data) {
        $('span#songTime').text(data[2] + ":" + data[3] + "/" + data[0] + ":" + data[1]);
    }

    function showVoice(voice) {
        $('#thisVoice').text('Vol:' + voice * 100 + '%');
    }



    //更改音乐
    function changeMusic(index) {
        $(".songName").removeClass('activemusic');
        $($('.songName')[index]).addClass('activemusic');
        // console.log($())
        $('#musics').empty();
        $('#musics').html('<audio src=" music/' + musicList[index] + '.mp3 " id="music"></audio>');
        music = document.getElementById("music");
        music.play();
        changeMusicName(index);
    }







    //音乐的控制开关函数:
    var musicControl = function(music) {
        if (music.paused) {
            music.play();
            $('.tusiji').fadeIn();
            $("#controller").find('i')[0].className = 'music-media-pause';
        } else {
            music.pause();
            $('.tusiji').fadeOut();
            $("#controller").find('i')[0].className = 'music-media-play';
        }

    }

    //获取音乐的信息
    var musicData = function(music) {
        // console.log(music.src.split('.mp3'));
        //音乐时长:
        var music_time = music.duration;
        //当前音乐时间
        var now_time = music.currentTime;

        var minutes = parseInt(music_time / 60);
        var seconds = parseInt(music_time - minutes * 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        //返回播放时长
        var seconds_now = parseInt(now_time % 60);
        var minutes_now = parseInt(now_time / 60);
        seconds_now = seconds_now < 10 ? '0' + seconds_now : seconds_now;
        minutes_now = minutes_now < 10 ? '0' + minutes_now : minutes_now;
        // console.log(minutes);
        var rate = parseFloat(now_time / music_time);
        var voice = music.volume;
        return [
            minutes, //分钟
            seconds, //秒数
            minutes_now, //当前分数
            seconds_now, //当前秒钟
            rate,
            voice,
        ]
    }


    music.volume = 0.5;
    //更改当前时间以及音量
    function changeMusicTime(music, n) {
        // console.log(music);
        music.currentTime = music.duration * n;
    }

    function changeMusicVolume(music, m) {
        music.volume = m;
        // console.log(music.volume);
    }

    $('.proBall')[0].onmousedown = function(e) {
        var e = event ? event : window.event;
        document.onmousemove = function(e) {
            var left3 = $('.proBall')[0].offsetLeft + 1;
            var leftP3 = parseInt(e.pageX);
            var parW = parseFloat($('.proBall').parent().css('left'));
            var Wlimit = parseFloat($('.proBall').parent().css('width'));
            var thisleft = leftP3 - parW;
            if (thisleft < 0) {
                thisleft = 0;
            } else if (thisleft > Wlimit) {
                thisleft = Wlimit - 4;
            } else {
                thisleft = thisleft - 4;
            }
            // console.log(thisleft);
            $('.proBall').css({ 'left': thisleft });
            document.onmouseup = function() {
                document.onmousemove = null;
            }
            var ballRate = thisleft / Wlimit;
            changeMusicTime(music, ballRate);
        };
    }


    $('.progress').click(function(e) {
        var left = $(this)[0].offsetLeft+$('#zshMusic')[0].offsetLeft;
        var leftP = e.pageX;
        var rong = parseInt(leftP - left) / parseInt($(this).css('width'));
        changeMusicTime(music, rong);
    });

    $('.voice').click(function(e) {
        var left2 = $(this)[0].offsetLeft+$('#zshMusic')[0].offsetLeft;
        var leftP2 = e.pageX;     
        var rong2 = (parseInt(leftP2 - left2)) / parseInt(($(this).css('width')));
        changeMusicVolume(music, rong2);
        // console.log(rong2/4);
        $('.insideVic').css({ 'width': parseInt(musicData(music)[5] * 100)});
        showVoice(musicData(music)[5]);
    });



    setInterval(function() {
        $('.insidePro').css({ 'width': parseInt(musicData(music)[4] * 300) });
        $('.proBall').css({ 'left': parseInt(musicData(music)[4] * 300) });
        showMusicTime(musicData(music));
        if (music.ended) {
            console.log('end=>next');
            zsh += 1;
            if (zsh > 4) {
                zsh = 0;
            }
            changeMusic(zsh);
        }
        // console.log(musicData(music)[4]*300);
    }, 500);



    $('#controller').click(function() {
        musicControl(music);
    })

 })