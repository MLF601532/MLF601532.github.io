(function ($) {
	$(function () {
		/*$('.goods-single').mouseenter(function () {
			$(this).children('.goods-info').stop(true).animate({
				marginTop: -20
			}, 100);
		}).mouseleave(function () {
			$(this).children('.goods-info').stop(true).animate({
				marginTop: 0
			}, 100);
		});*/

		// 检查方向
		$(".single-demo").bind("mouseenter mouseleave",function(e) {
		var oMove = $(this).children('a');
        var w = $(this).width();
        var h = $(this).height();

        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
        var eventType = e.type;
        if(e.type == 'mouseenter'){
           switch(direction) {
	           	case 0:
	           		oMove.css({
	           			left: 0,
	           			top: -242
	           		});
	           		break;
	           	case 1:
	           		oMove.css({
	           			left: 242,
	           			top: 0
	           		});
	           		break;
	           	case 2:
	           		oMove.css({
	           			left: 0,
	           			top: 242
	           		});
	           		break;
	           	case 3:
	           		oMove.css({
	           			left: -242,
	           			top: 0
	           		});
	           		break;
           }
           oMove.animate({
           	left:0,
           	top:0
           }, 150);
        }else{
            switch(direction) {
	           	case 0:
	           		oMove.stop(true).animate({
	           			left: 0,
	           			top: -242
	           		},150);
	           		break;
	           	case 1:
	           		oMove.stop(true).animate({
	           			left: 242,
	           			top: 0
	           		}, 150);
	           		break;
	           	case 2:
	           		oMove.stop(true).animate({
	           			left: 0,
	           			top: 242
	           		}, 150);
	           		break;
	           	case 3:
	           		oMove.stop(true).animate({
	           			left: -242,
	           			top: 0
	           		},150);
	           		break;
           }
        }
    	});

	});
})(jQuery);