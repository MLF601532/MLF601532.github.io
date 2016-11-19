/**
 * Created by Administrator on 2016/9/23.
 */
(function($) {
    var olist = $('#list');
    $.ajax({
        url: 'https://rate.tmall.com/list_detail_rate.htm?itemId=38686272879&spuId=271730424&sellerId=1677252478&order=3&currentPage=2&append=0&content=1&tagId=&posi=&picture=&ua=042UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5OcktxSHNNdUh8QHxIdiA%3D%7CU2xMHDJ7G2AHYg8hAS8XKAYmCFQ1Uz9YJlxyJHI%3D%7CVGhXd1llXGZfZFpiX2tXa19hVmtJdkt1SXdJcU9zTnRMdkx5Q207%7CVWldfS0TMwgxDy8RMR8gGTMdSx0%3D%7CVmhIGCUFOBgkGyAePgA8CTISLhEkGTkFOAc%2BHiIdKBU1ATQNWw0%3D%7CV25OHjAePgY8BycbLhMoCDcMNwtdCw%3D%3D%7CWGFBET8RMQo%2FBiYeJxksDDYDPwpcCg%3D%3D%7CWWBAED4QMAQ7ACAYJxMoCD0CNglfCQ%3D%3D%7CWmJCEjwSMmJXa1R0THNGeVljV2pIcFBsVGFBf0VlW285GSQEKgQkESUcIXch%7CW2JfYkJ%2FX2BAfEV5WWdfZUV8XGBdfUlpXHxAey0%3D&isg=AmtrPuhiuFfMkOS9RI8cdOe2-o-pjn8CDS98HN3pdKoMfIneZFAPUgnGoAvp&needFold=0&_ksTS=1474635100237_1684&callback=?',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (data) {
            //console.log(data)
            var sHtml = '';
            data.rateDetail.rateList.forEach(function (v, k) {
                var name = data.rateDetail.rateList[k]['displayUserNick'];
                var word = data.rateDetail.rateList[k]['rateContent'];
                var time = data.rateDetail.rateList[k]['rateDate'];
                sHtml += '<li>' + "用户名：" + name + "时间：" + time + "评价：" + word + '</li>';
            });
            $('#list').html(sHtml);
        }
    });
              /*购买数量信息*/
        $(function(){
                      var info    = $('#info'),
                          spa3    = $('.spa3'),
                          spa33   = $('.spa33'),
                          ospan4  = $('.span4'),
                          index   = 1;
                /*数量增加   */
            spa33.click(function(){
                    index++;
                ospan4.html(index);

            });
           /* 数量减少*/
            spa3.click(function(){
                index--;
                if(index<=1){
                    index=1
                    ospan4.html(index);
                }
                else {
                    ospan4.html(index);
                }
            });

              /*购物车提交按钮 */
              var  ospa5   = $('.spa5');
            ospa5.click(function(){
              var
                   allnumber  = index,
                   oinfoimg   = $('#infoimg img').attr('src'),
                   ogoodsid   = $('#ssssss').html(),
                   ospa1      = $('.spa1').html(),
                   btn        = true,
                   sgoods     = getCookie('goods');
                console.log(allnumber);
                if(sgoods==undefined){
                    var agoods=[];
                }
                   else{
                    agoods = JSON.parse(sgoods);
                }

                //根据agoods数组的长度遍历 对当前点击的商品进行判断
                for(var i=0;i<agoods.length;i++){
                    if (agoods[i].goodsId==ogoodsid){
                        agoods[i].goodsNumber+=index;
                        btn= false;
                    }
                }
                 if(btn){
                     var oGoods ={
                         'goodsSrc':oinfoimg,
                         'goodsId': ogoodsid,
                         'goodsPrice': ospa1,
                         'goodsNumber':allnumber
                     }
                     agoods.push(oGoods);
                 }
                 setCookie('goods',JSON.stringify(agoods),7,'/');
                /*console.log(getCookie('goods'))*/

            });


            /*cookie信息*/
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

        });







    $(function(){
        var omos = $('.mos'),
            oul2 = $('.ul2'),
            otwo = $('.two');
        omos.click(function(){
            oul2.toggleClass(function(){
                return 'aa';
            });
            otwo.toggleClass(function(){
                return 'aa';
            });
        });
    });
              /*商品介绍 商品评价*/
    $(function(){
       var oshop1 = $('.shop1'),
           oshop2 = $('.shop2'),
           oshop  = $('.shop span'),
           oxx    = $('#xx'),
           inIdex = null;
        oshop.click(function(){

            inIdex=$(this).index();
            oshop.removeClass('shop1').eq(inIdex).addClass('shop1');
        });
        oshop2.click(function(){
            oxx .css({display:'none'})
        });
        oshop1.click(function(){
            oxx .css({display:'block'})
        });


    });



})(jQuery)