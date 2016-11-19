/**
 * Created by Administrator on 2016/10/27.
 */
    window.onload=function(){
         //localStorage.clear();

        //图片轮播
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 1,
            loop: true,
        });
        //点击加入购物车
        if(window.localStorage){
            var onIndex     =null,
                parent       =null,
                child        =null,
                oallmoney    =null,
                ogoodimg     =null,
                btn          =true;
            var   oshopping   =  $('.shopping');
            oshopping.tap(function(){
                onIndex    = oshopping.index($(this));
                parent     = oshopping.eq(onIndex).closest('.section-right');
                child      = parent.find('.title').html();
                oallmoney  = parent.find('.allmoney').html();
                ogoodimg   =  parent.find('.section-left img').attr('src');
                var arr        =  [],
                    index      =  1,
                    number     =  1;
                if(!localStorage.getItem('messages')){
                    arr=[];
             }else{
                    arr=JSON.parse(localStorage.getItem('messages'))
             }
               // 对当前的点击商品进行判断
                for(var i=0;i<arr.length;i++){
                      if(arr[i].goodstitle==child){
                          number=index++;
                          //console.log(number);
                          arr[i].goodsnumber+=number;
                          //console.log(arr[i].goodsnumber);
                          btn=false;
                      }
                }
                if(btn){
                    var
                        obj={
                            'goodstitle':child,
                            'goodsnumber': number,
                            'goodsimg':ogoodimg,
                            'goodspric':oallmoney,
                        }
                    arr.push(obj)
                }
                localStorage.setItem('messages',JSON.stringify(arr))
            });
            localStorage.getItem('messages');
           console.log(localStorage.getItem('messages'));
        }

    }