/**
 * Created by Administrator on 2016/10/29.
 */
window.onload=function(){
    if(window.localStorage){
      //localStorage.clear()
        var oinput     = $('.input'),
            arrtemp    = [null,null,null];
            //用户名设置
        oinput.bind({
            focus:function(){
            },
            blur:function one(){
             //验证手机号
                var temp = /^1[34578]\d{9}$/;
                //验证邮箱
                var temp2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var
                    a=temp.test(oinput.val()),
                    b=temp2.test(oinput.val());
                if(a==true||b==true){
                    arrtemp[0]=1;
                }
                if(a == false && b == false && (oinput.val().length < 6 || oinput.val().length > 20)){
                    alert('用户名的长度在6~20之间')
                    arrtemp[0]=0;
                    return false;

                }
                if (a == false && b== false && !isNaN(oinput.val()) && (oinput.val().length >= 6 && oinput.val().length <= 20)){
                    alert('用户名不能是纯数字,请确认输入的是手机号或者重新输入');
                    arrtemp[0]=0;
                    return false;

                }
            }
        })
        //密码设置
         var
             opassword  = $('.password');
        opassword.bind({
            focus:function(){

            },
            blur:function two(){
                var reg = /^[a-zA-Z0-9!"\#$%&'()*+,-./:;<=>?@\[\\\]^_`\{\|\}\~]{6,15}$/;
                var  c  =reg.test(opassword.val());
                if(c == true){
                    arrtemp[1]=1;
                }
                if(c == false){
                    alert('密码在6~15位数字之间')
                    arrtemp[1]=0;
                    return false;
                }
            }
        })
        //确认密码
        var orepeat = $('.repeat');
        orepeat.bind({
            focus:function(){

            },
            blur:function three(){
                if (orepeat.val() != opassword.val()) {
                    arrtemp[2] = 0;
                    alert('密码不一致')
                }
                if (orepeat.val() == opassword.val()) {
                    arrtemp[2] = 1;
                }
            }
        });
        var
            olanded = $('.landed'),
            count   =0;
        olanded.tap(function(){
            for (var i = 0 ;i < arrtemp.length ; i++){
                count += arrtemp[i];
            }
            if(count==3){
                var
                    obj={
                        'username':oinput.val(),
                        'userpasserd':opassword.val()
                    }
               localStorage.setItem('userinfor',JSON.stringify(obj))
                alert('恭喜您注册成功');
            }
            console.log(localStorage.getItem('userinfor'))
        });
    }
}