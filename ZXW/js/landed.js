/**
 * Created by Administrator on 2016/10/29.
 */
window.onload=function(){
    if(window.localStorage){
        var
            oinput     = $('.input'),
            opasserd   = $('.passerd'),
            ouseinfor  = localStorage.getItem('userinfor'),
            arrs       =[null,null],
            olanded    =$('.landed');
            if(ouseinfor){

                var
                    ousermessage  = JSON.parse(ouseinfor);
                oinput.val(ousermessage.username);
                opasserd.val(ousermessage.userpasserd);
            }

        olanded.tap(function () {
            if (oinput.val() === '') {
                alert('用户名为空');
            }
            if (oinput.val() !== '' && opasserd.val() == '') {
               alert('密码为空')
            }
            if (oinput.val() !== '' && opasserd.val() !== '' && (oinput.val() != ousermessage['username'] || opasserd.val() !=ousermessage['userpasserd'])) {
                alert('用户名和密码不匹配')
            }
            if (oinput.val() == ousermessage['username'] && opasserd.val() == ousermessage['userpasserd']) {
                var obj = {
                    'userName'  : oinput.val(),
                };
                var tempCookie = JSON.stringify(obj);
                localStorage.setItem('cookies',tempCookie);
                window.location.href = 'index.html'
            }

        });

    }
}
