/**
 * Created by Administrator on 2016/9/22.
 */
(function($){
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
    $(function(){
        //客户服务信息
        var oheaderli3=$('.header-li3'),
            oheaderli3ul=$('#header-li3-ul'),
        //微信扫一扫
            oheadersp=$('.header-sp'),
            oheaderspimg=$('.header-spimg'),
            oform1=$('.form1');
        //客户服务信息
        oheaderli3.mouseenter(function(){
            oheaderli3ul.css({display:'block'});
        });
        oheaderli3.mouseleave(function(){
            oheaderli3ul.css({display:'none'})
        });
        //客户服务信息
        oheadersp.mouseenter(function(){
            oheaderspimg.css({display:'block'});
        });
        oheadersp.mouseleave(function(){
            oheaderspimg.css({display:'none'})
        });
    })

})(jQuery)