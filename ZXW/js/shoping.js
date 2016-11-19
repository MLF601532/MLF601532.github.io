/**
 * Created by Administrator on 2016/10/28.
 */
window.onload=function(){
    if (window.localStorage){
        var
            agoods       = localStorage.getItem('messages'),
            oGoods       = null,
            osectoon2    = $('.sectoon2'),
            omore        = $('.more'),
            str          = '',
            ocontent     = $('.content'),
            numbercontet = 0,
            allprice     = 0,
            oallmoney    = $('.all-money'),
            oallnumber   = $('.all-number');
        if(!agoods){
            omore.css({display:'none'});
            osectoon2.css({display:'block'});
        }else if(agoods){
         omore.css({display:'block'});
         osectoon2.css({display:'none'});
         //获得添加的商品信息
          var arr=JSON.parse(agoods);
            for(var i=0;i<arr.length;i++){
                oGoods=arr[i];
                //console.log(oGoods)
               str+='<div class="more"><div class="more-left"><a href="javascript:;"><img src="'+oGoods.goodsimg+'"></a></div><div class="more-right"><p class="p1"><span class="title">'+oGoods.goodstitle+'</span><span class="delete"><img src="../img/delete.png"></span></p><span>T恤</span><p class="p2"><span>单价：</span><span class="money">'+oGoods.goodspric+'</span><span class="big">L</span></p><p class="p3">数量：<span class="less">-</span><input type="text" value="'+oGoods.goodsnumber+'" class="number"><span class="mores">+</span></p></div></div>'
                numbercontet+=parseInt(oGoods.goodsnumber);
                allprice    +=parseInt(oGoods.goodspric.slice(1)*oGoods.goodsnumber);
            }
            ocontent.append(str);
            oallnumber.html(numbercontet);
            oallmoney.html(allprice);
    }
        //点击判断商品的增加
        var
            omores    = $('.mores'),
            oless     = $('.less'),
            iIndex    = null,
            onumber   = $('.number'),
            omoney    = $('.money'),
            allprices = null,
            otitle    = $('.title');
        omores.tap(function(){
            iIndex=omores.index($(this));
            var goodsnumber = onumber.eq(iIndex).val();
            var goodspric   = omoney.eq(iIndex).html();
            goodsnumber++;
            onumber.eq(iIndex).val(goodsnumber)//单个商品增加
            var shopbumbers  =  oallnumber.html();
             oallnumber.html(++shopbumbers);//商品的总数量增加
            for(var i=0;i<omores.length;i++){
                allprices+=onumber.eq(i).val()*(goodspric.slice(1));
                console.log(allprices)
                oallmoney.html(allprices)
            }
           //增加的商品再一次加入到购物车中
      if(agoods){
            var oGoods = JSON.parse(agoods);
            var oid    = otitle.eq(iIndex).html();
            for(var i=0;i<oGoods.length;i++){
                if(oGoods[i].goodstitle==oid){
                    oGoods[i].goodsnumber=onumber.eq(iIndex).val();
                    localStorage.setItem('messages',JSON.stringify(oGoods))
                }
             }
           }
        });
        //点击减少商品
        oless.tap(function(){
            iIndex=oless.index($(this));
            var goodsnumber = onumber.eq(iIndex).val();
            var goodspric   = omoney.eq(iIndex).html();
             goodsnumber--;
            if(goodsnumber<=1){
                goodsnumber=1
            }
            onumber.eq(iIndex).val(goodsnumber)//单个商品减少
            var shopbumbers=oallnumber.html();
            if (shopbumbers<=oless.length){
                shopbumbers=oless.length+1;
            }
            oallnumber.html(--shopbumbers);//商品的总数量减少
        //减少的商品再一次加入购物车中
        if(agoods){
            var oGoods=JSON.parse(agoods);
            var oid=otitle.eq(iIndex).html();
            for(var i=0;i<oGoods.length;i++){
                if(oGoods[i].goodstitle==oid){
                    oGoods[i].goodsnumber=onumber.eq(iIndex).val();
                    if(oGoods[i].goodsnumber<=1){
                        oGoods[i].goodsnumber=1
                    }
                    localStorage.setItem('messages',JSON.stringify(oGoods))
                }
            }
        }
        });
       // 删除单条记录
        var odelete   =$('.delete');
        odelete.tap(function(){
            var  agoods =localStorage.getItem('messages'),
                 oidex  = odelete.index($(this)),
                 orr=[];
            var parent =odelete.eq(oidex).closest('.p1');
            var child  =parent.find('.title').html();
            if(agoods){
                for(var i=0;i<JSON.parse(agoods).length;i++){
                    if(JSON.parse(agoods)[i].goodstitle!=child){
                        orr.push(JSON.parse(agoods)[i]);
                    }
                }
                if(orr.length==0){
                    localStorage.clear();
                    omore.css({display:'none'});
                }else {
                    agoods=orr;
                    localStorage.setItem('messages',JSON.stringify(agoods));
                }
                osectoon2.css({display:'none'});
            }
            window.location.href='shopping.html'
        });
    }
}