/**
 * Created by Administrator on 2016/9/28.
 */
/* 实现收货人的信息保存和更改*/

(function ($) {
    $(function () {
        var oBC     = $('.BC');
        var ouser   = getCookie('user');
        var str     = '';
        var ofomtop = $('.fom-top');
        var oul2    = $('.ul2');
          /* 获得cookie购买人的相关信息*/
        if (ouser) {
            var ousermessage = JSON.parse(ouser);
            //console.log(ousermessage)
            /*将信息进行字符串拼接*/
            str = '<div class="fom-top"> <ul class="ull"><div class="hide"><ul class="ul1"> <li class="list-top"><h3>收货地址</h3><a href="havascript:;" class="aa">修改收货地址</a></li></li><li>收货人:' + ousermessage.usernam + '</li><li>手机号:' + ousermessage.mobilephone + '&nbsp;&nbsp;&nbsp;电话：' + ousermessage.tel + '</li><li>地址:'+ousermessage.address4+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮编：' + ousermessage.PostalCode + '</li><li>购买人真实姓名：' + ousermessage.realname + '</li></ul></div></ul></div>';
           // console.log(str);
            ofomtop.append(str);//获得的信息传递给页面结构
            oul2.css({display: 'none'});//讲对应的结构隐藏
        }
          /*点击事件同时床架cookie*/
        oBC.click(function () {
            var
                oipt1    = $('.ipt1').val(),
                oipt2    = $('.ipt2').val(),
                oipt3    = $('.ipt3').val(),
                oselect1 = $('.select1').html(),
                oselect2 = $('.select2').html(),
                oselect3 = $('.select3').html(),
                oipt4    = $('.ipt4').val(),
                oipt5    = $('.ipt5').val(),
                olist3   = $('.list3').html(),
                oipt7    = $('.ipt7').val();
            //console.log(oipt1);
         /*   创建所需信息的对象*/
            var oBj = {
                'usernam': oipt1,
                'mobilephone': oipt3,
                'tel': oipt4,
                'address4': oipt7,
                'PostalCode': oipt2,
                'realname': oipt5

            }
            var userMessage = JSON.stringify(oBj);//将对象解析成字符串
            setCookie('user', userMessage, 7, '/');//创建字符串
            oul2.css({display: 'none'});

        });
        /* 再次到修改地址页面*/
        $('.aa').click(function () {
            console.log(000)
            oul2.css({display: 'block'});
            $('.hide').css({display: 'none'});

        });

        /*cookie信息*/
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
    });
})(jQuery)



