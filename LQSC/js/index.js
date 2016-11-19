/**
 * Created by Administrator on 2016/9/20.
 */
(function($){
   $(function(){

          // 导航栏隐藏部分
            obanderulli=$('#bander-ul li'),
            obanderdiv=$("#bander-hidden div"),
            obanderhid=$('#bander-hid');

       obanderulli.mouseenter(function(){
           iIndex = $(this).index();
          obanderdiv.css({display:'none'}).eq(iIndex).css({display:'block'})
       })
       obanderhid.mouseleave(function(){
           obanderdiv.eq(iIndex).css({display:'none'})
       })
   });
                          /* 文本框失去获得焦点*/
      $(function(){
          var oform1=$('.form1');
          oform1.blur(function(){
              console.log(00000)
              if(oform1.value==""){
                  clear.value=clear.defaultValue;
              }
          });

          oform1.focus(function(){
              if(oform1.value==oform1.defaultValue){
                  this.value="";
              }
          });

      });

          //图片轮播
   $(function (){
        var  oender=$("#enter a"),
             olu=$("#lu li"),
             obander=$('#bander-lubo'),
             inIdex=null,
             timer = null;

           timer = setInterval(function(){
               inIdex++;
               if(inIdex>=10){
                   inIdex=0;
               }
               olu.css({display:"none"}).eq(inIdex).fadeIn(400);
               oender.removeClass('a1').eq(inIdex).addClass('a1');
            },2000);
       oender.mouseenter(function(){
               inIdex=$(this).index();
               oender.removeClass('a1').eq(inIdex).addClass('a1');
               olu.css({display:"none"}).eq(inIdex).fadeIn(400);
           });

       obander.mouseenter(function(){
           clearInterval(timer)
           });

       obander.mouseleave(function(){
           timer = setInterval(function(){
               inIdex++;
               if(inIdex>=10){
                   inIdex=0;
               }
               olu.css({display:"none"}).eq(inIdex).fadeIn(400);
               oender.removeClass('a1').eq(inIdex).addClass('a1');
           },2000);

       })
   });
    /*右侧底部图片轮播*/
    $(function () {
        var octt = $("#bander-rightctt a"),
            orightbt = $('#bander-rightbt a'),
            owu = $('#wu'),
            inIdex = null,
            timer = null;
        timer = setInterval(function () {
            inIdex++;
            if (inIdex >= 3) {
                inIdex = 0;
            }
            orightbt.css({display: "none"}).eq(inIdex).fadeIn(400);
            octt.removeClass('az').eq(inIdex).addClass('az');
        }, 3000);
        octt.mouseenter(function () {
            inIdex = $(this).index();
            octt.removeClass('az').eq(inIdex).addClass('az');
            orightbt.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
        owu.mouseenter(function(){
              clearInterval(timer);
          })
        owu.mouseleave(function () {
            timer = setInterval(function () {
                inIdex++;
                if (inIdex >= 3) {
                    inIdex = 0;
                }
                orightbt.css({display: "none"}).eq(inIdex).fadeIn(400);
                octt.removeClass('az').eq(inIdex).addClass('az');
            }, 3000);
        });
    });
        /*第一个无缝滚动*/
    $(function(){
               var inIdex =1,
                   iwidth=1006,
                   timer = null,
                   olup=$('#lup'),
                   ocontentright=$('#content-right'),
                   olist=$('#lup ul');
                 olup.html(olist[2].outerHTML + olup.html() + olist[0].outerHTML);
       /* 启动定时器*/
      timer = setInterval(function () {
            inIdex++;
            olup.animate({left: -inIdex * iwidth}, 300, function () {
                if (inIdex >=4) {
                    inIdex = 1;
                    olup.css({left: -inIdex * iwidth})
                }
            });
        }, 4000);
         /*  当鼠标放上去后取消定时器*/
        ocontentright.mouseenter(function(){
            clearInterval(timer);
        })
       /* 当鼠标离开时启动定时器*/
        ocontentright.mouseleave(function(){

                  timer = setInterval(function () {
                    inIdex++;
                    olup.animate({left: -inIdex * iwidth}, 300, function () {

                   });
                      if (inIdex >=4) {
                          inIdex = 1;
                          olup.css({left: -inIdex * iwidth})
                      }
            }, 4000)
        })
            /* 左侧的方向控制*/
        $('#leftt').click(function () {
                    inIdex--;
                    olup.animate({left: -inIdex * iwidth}, 300, function () {
                if (inIdex <=0) {
                    inIdex = 3;
                    olup.css({left: -inIdex * iwidth})
                }
            });
        });
       /* 右侧的方向控制*/
        $('#rightt').click(function () {
            inIdex++;
            olup.animate({left: -inIdex * iwidth}, 300, function () {
                if (inIdex >=4) {
                    inIdex = 1;
                    olup.css({left: -inIdex * iwidth})
                }
            });
        });
    });
    /*第二个无缝轮播*/
    $(function(){
        var inIdex = 1;
        iwidth = 798,
            timer = 0,
            otent=$('#tent-contss'),
            otentcon=$('#tent-cont'),
            oul=$('#tent-contss ul');
        otent.html(oul[2].outerHTML + otent.html() + oul[0].outerHTML);
        otentcon.mouseenter(function(){
            clearInterval(timer);
        })
        otentcon.mouseleave(function(){
            timer = setInterval(function () {
                     inIdex++;
                     otent.animate({left: -inIdex * iwidth}, 300, function () {
                    if (inIdex >=4) {
                        inIdex = 1;
                        otent.css({left: -inIdex * iwidth})
                    }
                });
            }, 6000)
        })

        $('#lefttt').click(function () {
                    inIdex--;
            otent.animate({left: -inIdex * iwidth}, 300, function () {
                if (inIdex <= 0) {
                    inIdex = 3;
                    otent.css({left: -inIdex * iwidth})

                }
            });
        });

        $('#righttt').click(function () {
                     inIdex++;
                     otent.animate({left: -inIdex * iwidth}, 300, function () {
                     if (inIdex >=4) {
                     inIdex = 1;
                     otent.css({left: -inIdex * iwidth})

                }
            });
        });
        timer = setInterval(function () {
                    inIdex++;
                    otent.animate({left: -inIdex * iwidth}, 300, function () {
                   if (inIdex >=4) {
                    inIdex = 1;
                    otent.css({left: -inIdex * iwidth})
                }
            });
        }, 6000)

    });

               /*          1F           */
       /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main-left-img a"),
            olefta = $('#main-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
      /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main-contents-img a"),
            oleftaa = $('#main-contents-an a'),
            inIdex = null;
        oleftaa.mouseenter(function () {

            inIdex = $(this).index();
            oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
            oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*1f中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main-right-top li'),
            oaa=$('#aa ul'),
            inIdex=null;
        omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })

    });


    /*          2F           */
    /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main2-left-img a"),
            olefta = $('#main2-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
    /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main2-contents-img a"),
            oleftaa = $('#main2-contents-an a'),
            inIdex = null;
        oleftaa.mouseenter(function () {

            inIdex = $(this).index();
            oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
            oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*1f中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main2-right-top li'),
            oaa=$('#aa2 ul'),
            inIdex=null;
        omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })

    });

    /*          3F           */
    /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main3-left-img a"),
            olefta = $('#main3-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
    /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main3-contents-img a"),
            oleftaa = $('#main3-contents-an a'),
            inIdex = null;
        oleftaa.mouseenter(function () {

            inIdex = $(this).index();
            oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
            oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main3-right-top li'),
            oaa=$('#aa3 ul'),
            inIdex=null;
        omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })

    });

    /*          4F           */
    /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main4-left-img a"),
            olefta = $('#main4-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
    /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main4-contents-img a"),
            oleftaa = $('#main4-contents-an a'),
            inIdex = null;
        oleftaa.mouseenter(function () {

            inIdex = $(this).index();
            oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
            oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main4-right-top li'),
            oaa=$('#aa4 ul'),
            inIdex=null;
        omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })

    });


    /*         5F           */
    /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main5-left-img a"),
            olefta = $('#main5-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
    /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main5-contents-img a"),
            oleftaa = $('#main5-contents-an a'),
            inIdex = null;
        oleftaa.mouseenter(function () {

            inIdex = $(this).index();
            oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
            oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main5-right-top li'),
            oaa=$('#aa5 ul'),
            inIdex=null;
        omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })

    });

    /*          6F           */
    /*中间左侧图片轮播*/
    $(function () {
        var oimg = $("#main6-left-img a"),
            olefta = $('#main6-left-an a'),
            inIdex = null;
        olefta.mouseenter(function () {
            inIdex = $(this).index();
            olefta.removeClass('azz').eq(inIdex).addClass('azz');
            oimg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });

    });
    /*中间左侧的右侧图片轮播*/
    $(function () {
        var oimgg = $("#main6-contents-img a"),
            oleftaa = $('#main6-contents-an a'),
            inIdex = null;
            oleftaa.mouseenter(function () {
                inIdex = $(this).index();
                oleftaa.removeClass('azzz').eq(inIdex).addClass('azzz');
                oimgg.css({display: "none"}).eq(inIdex).fadeIn(400);
        });
    });
    /*中间右侧选项卡*/
    $(function(){
        var omaintop=$('#main6-right-top li'),
            oaa=$('#aa6 ul'),
            inIdex=null;
            omaintop.mouseenter(function(){
            inIdex=$(this).index();
            omaintop.removeClass('lili').eq(inIdex).addClass('lili');
            oaa.css({display:'none'}).eq(inIdex).css({display:'block'});
        })
    });
           /*定位锚点*/
    $(function(){
        $(window).scroll(function(){
            var oscrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                obg2       = $('.bg2'),
                obg3       = $('.bg3'),
                obg4       = $('.bg4'),
                obg5       = $('.bg5'),
                obg6       = $('.bg6'),
                obg7       = $('.bg7'),
                onavright = $('.nav-right');
            if (oscrollTop >= 500) {
                onavright.css({display:'block'})
            }
            else {
                onavright.css({display:'none'})
            }
            obg2.click(function(){
                document.body.scrollTop=1435;
                document.documentElement.scrollTop=1435;
            });
            obg3.click(function(){
                document.body.scrollTop=1885;
                document.documentElement.scrollTop=1885;
            });
            obg4.click(function(){
                document.body.scrollTop=2335;
                document.documentElement.scrollTop=2335;
            });
            obg5.click(function(){
                document.body.scrollTop=2785;
                document.documentElement.scrollTop=2785;
            });
            obg6.click(function(){
                document.body.scrollTop=3235;
                document.documentElement.scrollTop=3235;
            });
            obg7.click(function(){
                document.body.scrollTop=3685;
                document.documentElement.scrollTop=3685;
            });
        });

    });

                $(function(){
                    var oDL   = $('.DL');
                    var oqdl  = $('.qdl');
                    var ozc   = $('.zc');
                    var oz    = $('.ww');
                    if(getCookie('cookies')){
                        console.log(000)
                        oqdl.css({display:'none'});
                        ozc.css({display:'none'});
                        oz.html("<a href='' class='ww'>退出</a>");
                        oDL.html(JSON.parse(getCookie('userInfo')).userName);
                        oz.click(function(){
                           setCookie('cookies','',-7,'/');
                        });
                    }
                });

   /* cookie 信息*/
    function getCookie(name) {
        var aCookie = document.cookie.split('; ');
        for (var i = 0; i < aCookie.length; i++) {
            var aTemp = aCookie[i].split('=');
            if (aTemp[0] === name) {
                return decodeURIComponent(aTemp[1]);
            }
        }
    }

    function setCookie(name, value, expires, path) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + expires);
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
    }

})(jQuery)