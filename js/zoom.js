


function get(cName){//获取DOM对象的函数
   return document.querySelector(cName);
} 

function Zoom(){
    $(this).box =get(".box");
    this.zoom = get(".zoom");
    this.mid = get(".mid");
    this.big = get(".big");
    this.midImg =this.mid.children[0];
    this.bigImg = this.big.children[0];
    this.min = get(".min");
    this.minImg = this.min.children;
}

Zoom.prototype.show = function(){
    this.mid.onmouseover = ()=>{
         this.zoom.style.display = "block";
         this.big.style.display = "block";
    }

    this.mid.onmouseout = ()=>{
        this.zoom.style.display = "none";
        this.big.style.display = "none";
   }

   this.zoom.onmousemove = (e)=>{

       var mixH = this.mid.offsetHeight - this.zoom.offsetHeight;
       var mixW = this.mid.offsetWidth - this.zoom.offsetWidth;
       console.log(mixH);
       console.log(mixW);
       var evt = e || event;
       var x = evt.pageX - this.box.offsetLeft;
       console.log(x);
       var y = evt.pageY - this.box .offsetTop;
       
       var  l = x - this.zoom.clientWidth/2;
       var  t = y - this.zoom.clientHeight/2;

       l = l <= 0 ? 0 :l >= mixW ? mixW : l;
       t = t <= 0 ? 0 :t >= mixH ? mixH : t;
     
       this.zoom.style.left = l + "px";
       this.zoom.style.top = t + "px";
       console.log(this.zoom.offsetLeft);
       console.log(this.zoom.offsetTop);

       var bl = this.zoom.offsetLeft/this.mid.offsetWidth;
       var bt = this.zoom.offsetTop/this.mid.offsetHeight;

       console.log(bl);
       this.bigImg.style.left = -  bl * this.bigImg.offsetWidth + "px";
       this.bigImg.style.top = - bt * this.bigImg.offsetHeight + "px";
   }
}

Zoom.prototype.btn = function(){
     
    
    for(let i=0;i<this.minImg.length;i++){
         this.minImg[i].onclick = () =>{
            this.midImg.src = this.minImg[i].src;
            this.bigImg.src = this.minImg[i].src;
         }
    }
}