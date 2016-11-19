/**
 * Created by Administrator on 2016/9/25.
 */
(function ($) {
    $(function () {
        var str         = '',
            sgoods      = getCookie('goods'),
            ocookie     = null,
            oshopOne    = $('.shopOne'),
            oshopPrice  = $('.shopPrice'),
            onumber     = $('.number'),
            oprice      = $('.price'),
            omainshop   = $('.main-shop'),
            numbercount = 0,
            pricecount  = 0;

        //console.log(sgoods);
        /*  判断有没有购买商品 如果没有购买隐藏div*/
        if (!sgoods) {
            omainshop.css({display: 'none'});
            onumber.html('0');
            oprice.html('￥0.00');
        }
        if (sgoods) {
            var aGoods = JSON.parse(sgoods);
            for (var i = 0; i < aGoods.length; i++) {
                //循环便利所有的商品信息
                ocookie = aGoods[i];
                /*字符串进行拼接*/
                str = '<ul class="ulist"><li class="ulist1"><img src="' + ocookie.goodsSrc + '"></li><li class="ulist2">' + ocookie.goodsId + '</li><li class="ulist3">' + ocookie.goodsPrice + '</li><li class="ulist4"><span class="less">-</span><input type="text" value=' + ocookie.goodsNumber + ' class="inpt" /><span class="more">+</span></li><li class="ulist5">￥' + parseInt(ocookie.goodsPrice.slice(1)) * ocookie.goodsNumber + '.00</li><li class="ulist6">' + 0 + '</li><li><a href="" class="ulist7">清除</a></li></ul>';
                //console.log(str)
                $('.goodsdiv').append(str);//把商品信息添加到购物车样式结构中
                numbercount += parseInt(ocookie.goodsNumber); //商品的数量总和
                pricecount += parseInt(ocookie.goodsPrice.slice(1)) * ocookie.goodsNumber;//商品的价钱总和
                /* 对应位置得到对应的的值*/
                oshopOne.html(numbercount);
                oshopPrice.html('￥' + pricecount + '.00');
                onumber.html(numbercount);
                oprice.html('￥' + pricecount + '.00');

            }
        }
        /* 点击商品增加事件*/
        var
            oinpt    = $('.inpt'),
            omore    = $('.more'),
            oulist2  = $('.ulist2'),
            oulist3  = $('.ulist3'),
            oulist5  = $('.ulist5'),
            iIndex   = null;
        omore.click(function () {
            // console.log(000);
            iIndex = omore.index($(this));//当前点击的索引
            var otemprice = 0;
            var goodsnumber = oinpt.eq(iIndex).val();
            goodsnumber++;//改变单个商品的数量值
            oinpt.eq(iIndex).val(goodsnumber);
            var oneoshopOne = oshopOne.html();//商品总数量增加
            oshopOne.html(++oneoshopOne);
            var ononumber = onumber.html();//商品数量增加
            onumber.html(++ononumber);
            oulist5.eq(iIndex).html('￥' + goodsnumber * parseInt(oulist3.eq(iIndex).html().slice(1)) + '.00');//当前商品的总价变化
            for (var i = 0; i < oulist5.length; i++) {//循环便利所有商品的信息
                otemprice += parseInt(oulist5.eq(i).html().slice(1));//所有商品的价钱之和变化
                oshopPrice.html('￥' + otemprice + '.00');
                oprice.html('￥' + otemprice + '.00');
            }
            /* 增加的商品再一次加入购物车的cookie中*/
            if (sgoods) {
                //debugger;
                //console.log(000)
                var aaGoods = JSON.parse(sgoods);
                /*解析字符串*/
                var ggoodsId = oulist2.eq(iIndex).html();
                /*获取变量的id*/
                /* console.log(ggoodsId)*/
                for (var i = 0; i < aaGoods.length; i++) {
                    //console.log(aaGoods[i].goodsId)
                    if (aaGoods[i].goodsId === ggoodsId) {
                       // console.log(111)
                         aaGoods[i].goodsNumber=oinpt.eq(iIndex).val();
                        //console.log(n)
                        setCookie('goods', JSON.stringify(aaGoods), 7, '/');

                    }
                }

            }
        });

        /* 点击减少事件*/
        var
            oless = $('.less');
        oless.click(function () {
            // console.log(000);

            iIndex = oless.index($(this));//当前点击的索引
            var otemprice = 0;
            var goodsnumber = oinpt.eq(iIndex).val();
            goodsnumber--;//改变单个商品的数量值
            if (goodsnumber <= 1) {
                goodsnumber = 1;
            }
            oinpt.eq(iIndex).val(goodsnumber);
            var oneoshopOne = oshopOne.html();//商品总数量减少
            if (oneoshopOne <= 1) {
                oneoshopOne = 1;
            }
            oshopOne.html(oneoshopOne--);
            var ononumber = onumber.html();//商品数量减少
            if (ononumber <= 1) {
                ononumber = 1;
            }
            onumber.html(ononumber--);
            oulist5.eq(iIndex).html('￥' + goodsnumber * parseInt(oulist3.eq(iIndex).html().slice(1)) + '.00');//当前商品的总价变化
            for (var i = 0; i < oulist5.length; i++) {//循环便利所有商品的信息
                otemprice += parseInt(oulist5.eq(i).html().slice(1));//所有商品的价钱之和变化
                oshopPrice.html('￥' + otemprice + '.00');
                oprice.html('￥' + otemprice + '.00');
            }
            /* 减少的商品再一次加入购物车的cookie中*/
            if (sgoods) {
                var aaGoods = JSON.parse(sgoods);
                /*解析字符串*/
                var ggoodsId = oulist2.eq(iIndex).html();
                /*获取变量的id*/
                /* console.log(ggoodsId)*/
                for (var i = 0; i < aaGoods.length; i++) {
                    //console.log(aaGoods[i].goodsId)
                    if (aaGoods[i].goodsId == ggoodsId) {
                        var op = aaGoods[i].goodsNumber=oinpt.eq(iIndex).val();
                        if (op <= 1) {
                            aaGoods[i].goodsNumber = 1
                        }
                    }
                    setCookie('goods', JSON.stringify(aaGoods), 7, '/');
                }
            }
        });

        /*点击清除清除购物车当前的商品  如果只有一种商品则隐藏购物车 */
        var oulist7 = $('.ulist7'),
            arr     = [];
        oulist7.click(function () {
            var allcookie = getCookie('goods');
            var oIndex = oulist7.index($(this));
            ///console.log(oIndex)
            var parent = oulist7.eq(oIndex).closest('.ulist');//找最初的父亲
            var childid = parent.find('.ulist2').html();//找多有孩子中的特指的一个
            //console.log(childid);
            if (allcookie) {
               /* debugger;*/
                for (var i = 0; i < JSON.parse(allcookie).length; i++) {
                    if (JSON.parse(allcookie)[i].goodsId != childid) {
                        arr.push(JSON.parse(allcookie)[i]);
                    }
                }
                if (arr.length == 0) {
                    //console.log(arr)
                    setCookie('goods', '', -666, '/');
                    $('.goodsdiv').css({display:'none'});
                }
                else {
                    allcookie = arr;
                    //console.log(allcookie)
                    setCookie('goods', JSON.stringify(allcookie), 7, '/')
                }
            }
            parent.css({display: 'none'});
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
        function removeCookie(name, path) {
            document.cookie = name + '=;expires=-1;path=' + path;
        }
    });
})(jQuery)
