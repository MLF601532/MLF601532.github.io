/**
 * Created by Administrator on 2016/9/24.
 */
(function($){

    $(function() {

           /* 失去焦点获得焦点事件*/
        var
            oiput      = $('.iput'),
            otext      = $('.txt'),
            olong      = $('.long'),
            osucess    = $('.i-sucess'),
            oonenumber = $('.onenumber'),
            oyx        = $('.yx'),
            oyhm       = $('.yhm'),
            arrtemp    = [null,null,null,null];
        otext.bind({
              /* 用户名获得焦点*/
            focus: function () {
                if (this.value == this.defaultValue) {
                    this.value = '';
                }
                oiput.css({display: 'block'});
                osucess.css({display: 'none'});
                olong.css({display: 'none'});
                oonenumber.css({display: 'none'});
                oyx.css({display: 'none'});
                oyhm.css({display: 'none'});
            },
                 /*用户名失去焦点*/
            blur: function one() {
                if (this.value == '') {
                    this.value = this.defaultValue;
                }

                oiput.css({display: 'none'});
                /* 验证手机号*/
                var temp = /^1[34578]\d{9}$/;
                /*邮箱验证*/
                var temp2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var a2 = temp2.test(otext.val());
                var a = temp.test(otext.val());
                if (a == true || a2 == true) {
                    osucess.css({display: 'block'});
                    arrtemp[0] = 1;
                }
                if (a2 == false && a == false && (otext.val().length < 6 || otext.val().length > 20)) {
                    olong.css({display: 'block'});
                    arrtemp[0] = 0;
                }
                ;

                if (a2 == false && a == false && !isNaN(otext.val()) && (otext.val().length >= 6 && otext.val().length <= 20)) {
                    oonenumber.css({display: 'block'});
                    arrtemp[0] = 0;
                }
                ;

            }
        });
        /*设置密码*/
        var
            opwd    = $('.pwd'),
            oipwds  = $('.i-pwds'),
            omalong = $('.malong'),
            of1     = $('.f1'),
            ofza    = $('.fza'),
            otx     = $('.tx');

        opwd.bind({
             /* 密码获得焦点*/
            focus: function () {
                otx.css({display: 'block'});
                omalong.css({display: 'none'});
                of1.css({display: 'none'});
                onextmalong.css({display: 'none'});
                ofza.css({display: 'none'});
                oipwds.css({display: 'none'});
            },
              /* 密码失去焦点*/
            blur: function two() {
                otx.css({display: 'none'});
                var reg = /^[a-zA-Z0-9!"\#$%&'()*+,-./:;<=>?@\[\\\]^_`\{\|\}\~]{6,15}$/;
                var b = reg.test(opwd.val());
                if (b == true) {
                    oipwds.css({display: 'block'});
                    arrtemp[1] = 1;

                }
                if (b == true && !isNaN(opwd.val())) {
                    of1.css({display: 'block'});
                    ofza.css({display: 'block'});
                    arrtemp[1] = 1;
                }
                if (b == false) {
                    omalong.css({display: 'block'});
                    arrtemp[1] = 0;
                }
            }
        });
             /*确认密码 */
        var
            ocfpwd = $('.cfpwd'),
            oicfpwds = $('.i-cfpwds'),
            onextmalong = $('.nextmalong'),
            obyz = $('.byz'),
            onextmima = $('.nextmima');

        ocfpwd.bind({
              /*确认密码获得焦点*/
            focus: function () {
                onextmima.css({display: 'block'});
                obyz.css({display: 'none'});
            },
               /* 确认密码失去焦点*/
            blur: function three() {
                onextmima.css({display: 'none'});
                if (opwd.val() != ocfpwd.val()) {
                    obyz.css({display: 'block'});
                    oicfpwds.css({display: 'none'});
                    arrtemp[2] = 0;
                }
                if (opwd.val() == ocfpwd.val()) {
                    obyz.css({display: 'none'});
                    oicfpwds.css({display: 'block'});
                    arrtemp[2] = 1;
                }
            }
        });

        /*验证码判断*/
        var
            oyz1 = $('.yz1'),
            oyz2 = $('.yz2'),
            ob2 = $('.b2'),
            tempSs = null,
            arrS = ['fwc2', 'pskp', '626d', '6ydu', 'fum8', 'fum8', '8coc', 'm44r', 'sevb', '54rk'];
        getRandomYzm();
        oyz1.click(function () {
            getRandomYzm();
        });
        ob2.click(function () {
            getRandomYzm();

        });
        oyz2.blur(function () {
            tempString = oyz2.val();
            if (tempString == arrS[tempSs]) {
                arrtemp[3] = 1;
            }else{
                arrtemp[3] = 0;
            }
        });

        function getRandomYzm() {
            var tempS = parseInt(Math.random() * 10);
            tempSs = tempS;
            oyz1.children('img').attr('src', '../img/y' + (tempS + 1) + '.gif');

        }

        /*点击提交*/
        var ozhce = $(".zhce"),
            count = 0;
        ozhce.click(function () {
            for (var i = 0 ;i < arrtemp.length ; i++){
                count += arrtemp[i];
            }
            if (count == 4){
                var obj = {
                    'userName'  : otext.val(),
                    'password'  : opwd.val(),
                    'cfpassword':ocfpwd.val()
                };
                var tempCookie = JSON.stringify(obj);
                setCookie('userInfo',tempCookie,7,'/');
                alert('恭喜你注册完成');
               window.location.href='利群商城主页.html'
            }
        });

    });
    /*console.log(getCookie('userInfo'));*/

})(jQuery)

function getCookie(name) {
    var aCookie = document.cookie.split('; ');
    for(var i =0; i < aCookie.length; i++) {
        var aTemp = aCookie[i].split('=');
        if(aTemp[0] === name) {
            return decodeURIComponent(aTemp[1]);
        }
    }
}
function setCookie(name, value, expires, path) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + expires);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
}
