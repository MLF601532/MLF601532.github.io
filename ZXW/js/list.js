 $(function() {
//    
		//预加载热销商品信息
		var
			otr = '',
			oprotist = $('.hot ul');
		
			$.ajax({
			url: "http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType: 'jsonp',
			type: 'get',
			async: true,
			success: function(data) {
				for(var i in data) {
					//console.log(data)
					otr += '<li  id="' + data[i].goodsID + '"><a href="javascript:;"><img src="' + data[i].goodsListImg + '"></a><p class="p1">' + data[i].goodsName + '</p><p class="p2">￥' + data[i].price + '</p></li>';
					oprotist.html(otr);
				}
			},
			
			
		})
		
		//   调用商品分类
		var
			str = '',
			owrapper = $('#lists');
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getclass.php',
			type: 'get',
			dataType: 'json',
			async: true,
			success: function(data) {
				//console.log(data)
				for(var i in data) {
					str += '<li class="swiper-slide iconfont">' + data[i].icon + '<p class="p"></p></li>'
				}
				owrapper.append(str);
				var mySwiper2 = new Swiper('#swiper-container2', {
					slidesPerView: 6,
					watchSlidesProgress : true,
				    watchSlidesVisibility : true,
				    onTap:function(swiper){	
		                mySwiper3.slideTo(swiper.clickedIndex,1000,false);
				   }
				});
				var mySwiper3 = new Swiper('#swiper-container3',{					
					onSlideChangeStart:function(swiper){
						mySwiper2.slideTo(swiper.activeIndex);
				  }				
				});
				 //点击事件找找索引 
			       $("#lists li").tap(function(){
			       	 var iIdex = $('#lists li').index(this);
	                  $('.hot').css({display:'none'});
			          $("#lists li").find(".p").hide();
			          $(this).find(".p").show();
			          classID = data[iIdex].classID;
			          addclass(classID);//调用下面的值
			       });
			}	
		})	
		
		
		//封装一个分类商品
        function addclass(id){
        	var ntr = '';
        	$.ajax({
        		url:"http://datainfo.duapp.com/shopdata/getGoods.php?classID="+id,
        		async:true,
        		dataType: 'jsonp',
        		type:"get",
        		success:function(data){
        			for(var i in data){
        				ntr+='<li  id="' + data[i].goodsID + '"><a href="javascript:;"><img src="' + data[i].goodsListImg + '"></a><p class="p1">' + data[i].goodsName + '</p><p class="p2">￥' + data[i].price + '</p></li>';    
        				$('.more').html(ntr);
        				
        			}
        		}
        	});
        }
});