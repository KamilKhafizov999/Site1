$(window).resize(function() {

     t228_setBg('205487756');
 });
 
 $(document).ready(function() {
 
     t228_highlight();
     
 
 
     t228__init('205487756');
     t228_setBg('205487756');
 
 });
 $(document).ready(function() {
     setTimeout(function(){
       t_menusub_init('205487756');
     }, 500);
   });

   $(window).resize(function() {

     t228_setBg('210792391');
 });
 
 $(document).ready(function() {
 
     t228_highlight();
     
         t228_checkAnchorLinks('210792391');
     
 
 
     t228__init('210792391');
     t228_setBg('210792391');
     
 
 
 
 
 
     $('#rec210792391 .t228').removeClass('t228__beforeready');
     t228_appearMenu('210792391');
     $(window).bind('scroll', t_throttle(function(){t228_appearMenu('210792391')}));
 
 
 
 });

 $(document).ready(function() {
     setTimeout(function(){
       t_menusub_init('210792391');
     }, 500);
   });

   
$(document).ready(function(){
     $("#rec208698528").attr('data-animationappear','off');
     $("#rec208698528").css('opacity','1');
     t450_initMenu('208698528');
     
   });

   $(document).ready(function() {
     setTimeout(function(){
       t_menusub_init('208698528');
     }, 500);
   });

   
$(document).ready(function(){
     setTimeout(function(){
       t702_initPopup('206777163');
     }, 500);
     
       
   
       /* hack for Android */
       var ua = navigator.userAgent.toLowerCase();
       var isAndroid = ua.indexOf("android") > -1;
       if(isAndroid) {
           $('.t-body').addClass('t-body_scrollable-hack-for-android');
           $('head').append("<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-hack-for-android {\noverflow: visible !important;\n}\n}\n</style>");
           console.log('Android css hack was inited');
       }
   });