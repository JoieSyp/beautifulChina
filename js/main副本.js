 var swiper = new Swiper('.swiper-container',{
        effect: 'slibe',
        grabCursor: true,
        direction: 'vertical',
        initialSlide:0,
        cube: {
            shadow: false,
        },
        onSlideChangeEnd:function(swiper){
          if (swiper.activeIndex==1) {
             pageTwo();
          }
          if (swiper.activeIndex==2) {
             pageThree();
          }
          if (swiper.activeIndex==3) {
             pageFour();
          }
          if (swiper.activeIndex==5) {
             pageSix();
          }

          if (swiper.activeIndex==6) {
             pageSeven();
          }
          if (swiper.activeIndex==7) {
             pageEight();
          }

        }
  });

 // 进度条制作
function progress(){
  var timer=null;
  $(document).ready(function(){
   timer=setInterval(function(){
          
         for (var i=1;i<=10;i++) {
        $("#proress-bar").css("width",(30*i)/64+'rem');
        $("#show-num").html(((10*i)+'%'));
     }
          if (i>10) {
            clearInterval(timer);
            $("#wrap-progress").css("display","none");
          }       
   },500)
   
 })
};
progress();
// 第三个页面动画
function pageThree(){
var bol=true;
var thirdpContent=$("#wrapTcontentimg");
var wrapFiveImg=$("#wrapFive #wrapFcontentimg");
var pageThird=function(conId,bol){
       conId[0].addEventListener("touchstart",function(){
         if(bol){
              conId.animate({
                 width:100+'%'
              })
              bol=false; 
         }else if(!bol){
           conId.animate({
             width:8.453125+'rem'
           })
            bol=true;
         }   

     },false);
   
}
pageThird(thirdpContent,bol);
 // 第五个页面  主海报内容
pageThird(wrapFiveImg,bol); 
}

//-------------- 第七个页面-------------------
function pageSeven(){
    var sevenCancle=$("#wrapSeven #btnCancle")
    var cancleBack=function(cancleId){
      cancleId[0].addEventListener("touchstart",function(){
          cancleId.parent().parent().css("display","none");
      })
    };
    cancleBack(sevenCancle);
    // -----------------下边就是轮播图的代码-----------------

    var index=0;
    var bol=false;



    // 图片运动函数
  //   var idnex = 1
  //   var startx,movex
  // document.start
  //   startx


  // document.move
  //   movex


  // document.end
  //   startx

   $("#wrappersContent")[0].addEventListener('touchstart',function(){
           $("#backBlack").css("display","block");   
            if($("#backBlack").css("display")=="block") {  
                  var len=16;
                  var indexLeft=16;
                   var allImglen=$("#wrappersContent img").length;
                  $("#wrappersContent img").each(function(index,value){
                        
                        $(value)[0].addEventListener('touchstart',function(ev){  

                              var ev=ev || window.event;                              
                               ev.cancelBubble=true;
                              var x=ev.touches[0].clientX;
                              $(value).removeAttr("id");
                             
                           $(value)[0].addEventListener('touchmove',function(ev){
                               var ev=ev || window.event;
                               ev.cancelBubble=true;
                               var newX=ev.changedTouches[0].clientX;
                               
                               // 向左滑动
                               if(x-newX>50){
                                 x=newX;
                                // console.log("向左");
                                // 如果大于0 就可以点击消失
                                 if ($(this).attr("data-index")>0) {
                                   otherElem(index);
                                   $(this).attr("class","moveImg");
                                   // clearTimeout(timer2);
                                   setTimeout(function(){
                                         $(value).css("display","none");
                                          var lens=9-0.5625*(index-1);
                                          $("#wrapsLeft").css({
                                                "transform":"translate(0px,"+lens+"rem)"
                                           }) 
                                    },700);
                                    
                                    
                                 }else if($(this).attr("data-index")==0){ 
                                      
                                       otherElem(index);
 
                                  }else{
                                    return;
                                }
                                  // 向右滑动
                              }
                              if(x-newX<(-100)){
                                  // console.log("向右滑动"+$(this).next().attr("data-index"));
                                  // cancleStyle();
                                  x=newX;
                                   console.log(index,x,newX);
                                  // if($(this).attr("data-index")<allImglen){
                                       cancleStyle();
                                      $(this).next().attr("class","backImg");
                                      $(this).next().css("display","block");
                                      // $(this).prev().css("display","block");
                                      $(this).css("display","block");
                                       setTimeout(function(){
                                          
                                          var lens=0.5625*index;
                                           $("#wrapsLeft").css({
                                                "transform":"translate(0px,"+lens+"rem)"
                                           })
                                        
                                      },700);
                                        // clearTimeout(timer);
                                  // }
                                 

                              }
                              

                           },false) 

                        },false)
                  
                  })






                  // 添加data-index属性
            addIndexs($("#wrappersContent img"));
              function addIndexs(elem){
                   elem.each(function(index,value){
                           $(value).attr("data-index",index);
                     })
                   
              } 


            
             // 对象的后边的两个对象的样式

             function otherElem(index){
                if (index==0) {
                   $("#wrappersContent img").eq(index).attr("id","secondImg");
                }
                
                if (index==1) {
                     // $("#wrappersContent img").eq(index-1).css({
                     //    'transform':'translate(0px,-0.25rem)'
                     // });
                     $("#wrappersContent img").eq(index-1).attr("id","secondImg");
                }
                if (index>=2) {
                     // $("#wrappersContent img").eq(index-1).css({
                     //    'transform':'translate(0px,-0.25rem)'
                     // });
                     $("#wrappersContent img").eq(index-1).attr("id","secondImg");
                    // $("#wrappersContent img").eq(index-2).css({
                    //     'transform':'translate(0px,-0.25rem)'
                    // })
                    $("#wrappersContent img").eq(index-2).attr("id","thirdImg");
                }

             };


            function cancleStyle(){
                   $("#wrappersContent img").each(function(index,value){
                     $(value).removeAttr("id");
                   })

            }


        }





   },false)

   // console.log($("#backBlack").css("display"));
  
    
  




    // $("#wrappersContent")[0].addEventListener('touchstart',function(ev){      
    //      var len=$("#wrappersContent img").length;

      
    //      var ev=ev || window.event;
    //      var x=ev.touches[0].clientX;
    //      var y=ev.touches[0].clientY;
          
    //       addIndexs($("#wrappersContent img"));   
          
    //       $.each($("#wrappersContent img"),function(index，value){

    //       })
    //       var index=$("#wrappersContent img").attr("data-index");
          
    //        if (index<indexLast){
               
    //            setTimeout(function(){

    //                $("#wrappersContent img").eq(index).css("display","none");
    //            },100);
    //         }else{
    //           return;
    //        }  

       // 遍历数组
     

      // $("#wrappersContent img").each(function(index,elem){
      //          if(index==1){
      //               $(elem).css({
      //                  'transform':'translate(0px,0.25rem)'
      //               })
      //           }
      //           if(index==2){
      //               $(elem).css({
      //                  'transform':'translate(0px,0.46875rem)'
      //               })
      //       } 

      //   })
          
     
    // })

    
}
















