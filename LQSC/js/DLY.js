/**
 * Created by Administrator on 2016/9/25.
 */
(function ($) {
    $(function () {

        var cookies = getCookie('userInfo'),
            oname   = $('#name'),
            opwd    = $('#pwd'),
            obtn    = $('#btn a'),
            ohidde  = $('#hidde'),
            ospa1   = $('.spa1'),
            ospa2   = $('.spa2'),
            ospa3   = $('.spa3'),
            count   = 0,
            arrs    = [0, 0];

        if (cookies) {
            var cookieinfor = JSON.parse(getCookie('userInfo'));
            oname.val(cookieinfor['userName']);
            opwd.val(cookieinfor['password']);
        }

        if (oname.val() == cookieinfor['userName']) {
            arrs[0] = 1;

        }
        if (opwd.val() == cookieinfor['password']) {
            arrs[1] = 1;

        }

        obtn.click(function () {
            if (oname.val() === '') {
                ohidde.css({display: 'block'});
                ospa1.css({display: 'block'})
            }
            if (oname.val() !== '' && opwd.val() == '') {
                ohidde.css({display: 'block'});
                ospa2.css({display: 'block'});
            }
            if (oname.val() !== '' && opwd.val() !== '' && (oname.val() != cookieinfor['userName'] || opwd.val() != cookieinfor['password'])) {
                ohidde.css({display: 'block'});
                ospa3.css({display: 'block'});
            }
            if (oname.val() == cookieinfor['userName'] && opwd.val() == cookieinfor['password']) {
                var obj = {
                    'userName'  : oname.val(),
                };
                var tempCookie = JSON.stringify(obj);
                setCookie('cookies',tempCookie,7,'/');
                window.location.href = '利群商城主页.html'
            }

        });


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