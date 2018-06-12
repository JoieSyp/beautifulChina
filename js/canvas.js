// 画线
function lineCross(context,startX,startY,otherPx,otherPy,r,r1,callBack){
     var x=0,y=0;
     var step=0;
     // 点之间的相隔  
     // 走了多少步
     var disX=otherPx-startX;
     var disY=otherPy-startY;
     var speedX=disX/40;
     var speedY=disY/40;
     // 判断是否到了终点
     var timer = setInterval(function(){
        context.beginPath();
        context.strokeStyle = "#fff";
        context.fillStyle = "#fff";
        context.moveTo(startX,startY);
        x=step*speedX+startX;
        y=step*speedY+startY;
        context.lineTo(x,y);
        context.fill();//填充
        context.stroke();//画线
        step++;
        if(step >= 40 ){
            // var circleNew=new Circle(otherPx,otherPy,r,r1);
            // circleNew.draw();
            commonCircle(context,otherPx,otherPy,r,r1);
            clearInterval(timer);
            callBack();
        }
     },10)
};
// 生成圆点点得函数
function commonCircle(context,px,py,r,r1){
   // 生成点
  function Circle(x,y,r,r1){
    this.x=x;
    this.y=y;
    this.r=r;
    // 产生阴影的圆心
    this.r1=r1;  
    this.draw=function(){
      context.beginPath();
      var grad  = context.createRadialGradient(this.x,this.y,this.r,this.x,this.y,this.r1);
     /* 设定各个位置的颜色 */
      grad.addColorStop(0,'rgba(255,255,255,1)');
      grad.addColorStop(0.5,'rgba(255,255,255,0.8)');
      grad.addColorStop(1,'rgba(255,255,255,0.5)');
      context.fillStyle =grad;
      context.arc(this.x,this.y,this.r1,0,Math.PI*2,true);
      context.fill();
    }
    this.showX=function(){
        return this.x;
    }
    this.showY=function(){
        return this.y;
    }

  }
// 圆点成产
 var circle1=new Circle(px,py,r,r1);
  circle1.draw();

}

// 第二个页面canvas
var pageTwo=function(){

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// 设置canvas的宽度
var  canvasWidth=document.documentElement.clientWidth;
var  canvasHeight=document.documentElement.clientHeight;
canvas.setAttribute('width',canvasWidth);
canvas.setAttribute('height',canvasHeight);

// 10个点
// 左边的圆点位置
// width: 10.0rem;height: 16.25rem;
// x轴 从上到下 1，2，3个点

var pointlX=0,
    pointlX2=(3.2/10.0)*canvasWidth,
    pointlX3=(3.2/10.0)*canvasWidth;
    pointlX4=(5.0/10.0)*canvasWidth;
    pointlX5=(5.0/10.0)*canvasWidth;
// y轴
var pointlY=(2.0625/16.25)*canvasHeight,
    pointlY2=(2.8/16.25)*canvasHeight,
    pointlY3=(12.5/16.25)*canvasHeight;
    pointlY4=(12.5/16.25)*canvasHeight;
    pointlY5=canvasHeight+10;

// 右边圆点的位置
var pointrX=(9.6875/10.0)*canvasWidth,

    pointrX2=(6.5/10.0)*canvasWidth,

    pointrX3=(6.5/10.0)*canvasWidth,
    pointrX4=(6.5/10.0)*canvasWidth,

    pointrX5=(6.5/10.0)*canvasWidth;
// 这个是手机端的正常
var pointrY=(10.8/16.25)*canvasHeight,
    pointrY2=(10.8/16.25)*canvasHeight,
    pointrY3=(9.8/16.25)*canvasHeight,
    pointrY4=(8.8/16.25)*canvasHeight,
    pointrY5=(2.0/16.25)*canvasHeight;

var r=4;
var r1=6;
// var color="#fff";
 commonCircle(context,pointrX,pointrY,r,r1);

// 嵌套函数  执行左边的点
lineCross(context,pointlX,pointlY,pointlX2,pointlY2,r,r1,function(){
	lineCross(context,pointlX2,pointlY2,pointlX3,pointlY3,r,r1,function(){
		lineCross(context,pointlX3,pointlY3,pointlX4,pointlY4,r,r1,function(){
          lineCross(context,pointlX4,pointlY4,pointlX5,pointlY5,r,r1,function(){
              
		   })
		})
	})
})
// 执行右边的点
lineCross(context,pointrX,pointrY,pointrX2,pointrY2,r,r1,function(){
     lineCross(context,pointrX2,pointrY2,pointrX3,pointrY3,r,r1,function(){
     
   })
})
// 向上画点
lineCross(context,pointrX,pointrY,pointrX4,pointrY4,r,r1,function(){
    lineCross(context,pointrX4,pointrY4,pointrX5,pointrY5,r,r1,function(){
     
   })
 })	

 
};

// ---------------第四个页面-----------
var pageFour=function(){
     var canvas = document.getElementById("canvas2");
    var context = canvas.getContext("2d");
    // 设置canvas的宽度
    var  canvasWidth=document.documentElement.clientWidth;
    var  canvasHeight=document.documentElement.clientHeight;
    canvas.setAttribute('width',canvasWidth);
    canvas.setAttribute('height',canvasHeight);

// 从左边开始画点
var pointlX=0,

    pointlX2=(3.6875/10.0)*canvasWidth,
    pointlX3=(3.6875/10.0)*canvasWidth;
    pointlX4=(5.1875/10.0)*canvasWidth;

// y轴
var pointlY=(12.375/16.25)*canvasHeight,
    pointlY2=(14.21875/16.25)*canvasHeight, 
    pointlY3=(13.625/16.25)*canvasHeight;
    pointlY4=(13.625/16.25)*canvasHeight; //第四个点是底部的第二个点

// 从下边画
var pointbX=(5.1875/10.0)*canvasWidth;
    pointbX3=(5.1875/10.0)*canvasWidth;
    pointbX4=(6.38125/10.0)*canvasWidth;
    pointbX5=(6.38125/10.0)*canvasWidth;

var pointbY=canvasHeight,

    pointbY3=(12.3125/16.25)*canvasHeight;
    pointbY4=(12.3125/16.25)*canvasHeight;
    pointbY5=(11.5/16.25)*canvasHeight;

// 从右边开始画

var pointrX=canvasWidth;

    pointrX2=(6.38125/10.0)*canvasWidth;
    pointrX3=(6.38125/10.0)*canvasWidth;

var pointrY=(3.59375/16.25)*canvasWidth;

    pointrY2=(2.125/16.25)*canvasWidth;
    pointrY3=(15.75/16.25)*canvasWidth;

var r=4;
var r1=6;



// 从从左边开始画

lineCross(context,pointlX,pointlY,pointlX2,pointlY2,r,r1,function(){
    lineCross(context,pointlX2,pointlY2,pointlX3,pointlY3,r,r1,function(){
      lineCross(context,pointlX3,pointlY3,pointlX4,pointlY4,r,r1,function(){
       
     })
   })
})
// 从下边画
lineCross(context,pointbX,pointbY,pointlX4,pointlY4,r,r1,function(){
    lineCross(context,pointlX4,pointlY4,pointbX3,pointbY3,r,r1,function(){
      lineCross(context,pointbX3,pointbY3,pointbX4,pointbY4,r,r1,function(){
          lineCross(context,pointbX4,pointbY4,pointbX5,pointbY5,r,r1,function(){
         
       })
     })
   })
})

// 从右边开始画
lineCross(context,pointrX,pointrY,pointrX2,pointrY2,r,r1,function(){
   lineCross(context,pointrX2,pointrY2,pointrX3,pointrY3,r,r1,function(){

   })

})
};
// 第六个页面
var pageSix=function(){
    
    var canvas = document.getElementById("canvas3");
    var context = canvas.getContext("2d");
    // 设置canvas的宽度
    var  canvasWidth=document.documentElement.clientWidth;
    var  canvasHeight=document.documentElement.clientHeight;
    canvas.setAttribute('width',canvasWidth);
    canvas.setAttribute('height',canvasHeight);

// 从左边画
var pointlX=0,
    pointlX2=(3.6875/10.0)*canvasWidth,
    pointlX3=(3.6875/10.0)*canvasWidth;


// y轴
var pointlY=(2.75/16.25)*canvasHeight,

    pointlY2=(4.625/16.25)*canvasHeight, 

    pointlY3=(10.3125/16.25)*canvasHeight;
  

// 从下边画
var pointbX=(3.0625/10.0)*canvasWidth;
    pointbX2=(3.0625/10.0)*canvasWidth;

    pointbX3=(6.5125/10.0)*canvasWidth;
    pointbX4=(6.5125/10.0)*canvasWidth;

var pointbY=canvasHeight,

    pointbY2=(12.34375/16.25)*canvasHeight;

    pointbY3=(12.34375/16.25)*canvasHeight;
    pointbY4=(11.5/16.25)*canvasHeight;

// 从右边开始画

var pointrX=canvasWidth;

    pointrX2=(6.84375/10.0)*canvasWidth;
    pointrX3=(6.38125/10.0)*canvasWidth;

    pointrX4=(6.84375/10.0)*canvasWidth;
    pointrX5=(6.38125/10.0)*canvasWidth;

var pointrY=(3.59375/16.25)*canvasWidth;

    pointrY2=(2.3125/16.25)*canvasWidth;
    pointrY3=(2.03125/16.25)*canvasWidth;
    
    pointrY4=(14.9625/16.25)*canvasWidth;
    pointrY5=(15.5625/16.25)*canvasWidth;
var r=4;
var r1=6;

// 左边画

lineCross(context,pointlX,pointlY,pointlX2,pointlY2,r,r1,function(){
    lineCross(context,pointlX2,pointlY2,pointlX3,pointlY3,r,r1,function(){
      
   })
})
// 从下边画
lineCross(context,pointbX,pointbY,pointbX2,pointbY2,r,r1,function(){
    lineCross(context,pointbX2,pointbY2,pointbX3,pointbY3,r,r1,function(){
      lineCross(context,pointbX3,pointbY3,pointbX4,pointbY4,r,r1,function(){
      
     })
   })
})

// 从右边开始画

lineCross(context,pointrX,pointrY,pointrX2,pointrY2,r,r1,function(){
    lineCross(context,pointrX2,pointrY2,pointrX4,pointrY4,r,r1,function(){
      
   })
})

lineCross(context,pointrX2,pointrY2,pointrX3,pointrY3,r,r1,function(){
    lineCross(context,pointrX3,pointrY3,pointrX5,pointrY5,r,r1,function(){
      
   })
})

};


// 第八个页面
var pageEight=function(){
 
   
    var canvas = document.getElementById("canvas4");
    var context = canvas.getContext("2d");
    // 设置canvas的宽度
    var  canvasWidth=document.documentElement.clientWidth;
    var  canvasHeight=document.documentElement.clientHeight;
    canvas.setAttribute('width',canvasWidth);
    canvas.setAttribute('height',canvasHeight);

// 从左边画
var pointlX=0,
    pointlX2=(3.6875/10.0)*canvasWidth,
    pointlX3=(3.6875/10.0)*canvasWidth;


// y轴
var pointlY=(1.375/16.25)*canvasHeight,

    pointlY2=(3.3125/16.25)*canvasHeight, 

    pointlY3=(10.3125/16.25)*canvasHeight;
  

// 从下边画

var pointbX=canvasWidth;

    pointbX2=(6.48125/10.0)*canvasWidth,

    pointbX3=(6.48125/10.0)*canvasWidth,

    pointbX4=(3.6875/10.0)*canvasWidth;

    pointbX5=(3.6875/10.0)*canvasWidth

var pointbY=(13.09375/16.25)*canvasHeight,

    pointbY2=(10.5625/16.25)*canvasHeight,

    pointbY3=(12.40625/16.25)*canvasHeight,

    pointbY4=(12.40625/16.25)*canvasHeight,
    pointbY5=canvasHeight+5;

// 从右边开始画

var pointrX=canvasWidth,

    pointrX2=(6.48125/10.0)*canvasWidth,

    pointrX3=(6.48125/10.0)*canvasWidth;


var pointrY=(12.125/16.25)*canvasHeight,

    pointrY2=(9.625/16.25)*canvasHeight,
    pointrY3=(2.03125/16.25)*canvasHeight;
   
var r=4;
var r1=6;

 
// 画左边的
lineCross(context,pointlX,pointlY,pointlX2,pointlY2,r,r1,function(){
    lineCross(context,pointlX2,pointlY2,pointlX3,pointlY3,r,r1,function(){
      
   })
})

// 从下边画

lineCross(context,pointbX,pointbY,pointbX2,pointbY2,r,r1,function(){
   lineCross(context,pointbX2,pointbY2,pointbX3,pointbY3,r,r1,function(){
       lineCross(context,pointbX3,pointbY3,pointbX4,pointbY4,r,r1,function(){
          lineCross(context,pointbX4,pointbY4,pointbX5,pointbY5,r,r1,function(){
   
        })
      })
   })
})

lineCross(context,pointrX,pointrY,pointrX2,pointrY2,r,r1,function(){
   lineCross(context,pointrX2,pointrY2,pointrX3,pointrY3,r,r1,function(){
   
   })
})

};













