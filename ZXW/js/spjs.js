/**
 * Created by Administrator on 2016/10/29.
 */
window.onload=function(){
    var  date1 = new Date('2016.11.11'),
         date2 = new Date(),
         time  =parseInt((date1.getTime()-date2.getTime())/1000),
         str='',
         otime =$('.time');
       setInterval(function(){
           time--
           var
               day       = Math.floor(time/(24*60*60)),
               afterday  = Math.floor(time-day*24*60*60),
               hour      = Math.floor(afterday/(60*60)),
               afterhour = Math.floor(afterday-hour*60*60),
               minutes   = Math.floor(afterhour/60),
               second    = afterhour-minutes*60;
           str='<p>距离结束时间：<span>'+day+'</span>天<span>'+hour+'时</span><span>'+minutes+'</span>分<span>'+second+'</span></p>秒'
           otime.html(str);
       },1000)


}