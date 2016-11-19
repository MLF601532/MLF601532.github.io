/**
 * Created by Administrator on 2016/9/22.
 */
(function($){
    $(function(){
              /* 左侧导航栏*/
             var    onavleft    = $('#nav-left');
             var    obanderhidd = $('#bander-ul');
             var    obanderulli =$('#bander-ul li');
             var    obanderdiv  =$("#bander-hidden div");
             var    obanderhid  =$('#bander-hid');
            onavleft.mouseenter(function(){
                obanderhidd.css({display:'block'});
            });
        obanderulli.mouseenter(function(){
            iIndex = $(this).index();
            obanderdiv.css({display:'none'}).eq(iIndex).css({display:'block'})
        })
        obanderhid.mouseleave(function(){
            obanderdiv.eq(iIndex).css({display:'none'});
            obanderhidd.css({display:'none'});
        });
    });
          /* 更多的js代码*/
      $(function(){
              var
                  osc2  = $('.sc2'),
                  ospa1 = $('.spaa');
           osc2.click(function(){
               ospa1.toggleClass(function(){
                   return 'add';
               })
           });
       });
       /*页面数字变动*/
       $(function(){
           var onn= $('.nn'),
               onnn= $('.nnn'),
               inIdex=1,
               oft = $('#ft');
           onn.click(function(){
                 inIdex--;
               if(inIdex<=1) {
                   inIdex = 1;
                   oft.html(inIdex);
               }

               else if(inIdex>1)
               {
                   oft.html(inIdex);
               }
           });
           onnn.click(function(){
                  inIdex++;
                  if (inIdex>=3){
                      inIdex=3;
                       oft.html(3)
                   }else {
                     oft.html(inIdex);
                 }

           });
       });

            /*左边的侧边栏*/
         $(function(){
             var    oh33    = $('.h33');
             var    oleftul = $('#main-left ul');
              oh33.click(function(){
                  oleftul.toggleClass(function(){
                      return 'add';
                  })
              })
         });
})(jQuery);