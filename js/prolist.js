function WaterFall() {
    this.wrap = document.getElementById("wrap");
    this.aItems = this.wrap.children;

    this.ml = this.mt = 10; //间距
    this.totalWidth = this.wrap.clientWidth; //可视区域的总宽度
    this.perWidth = this.aItems[0].offsetWidth + this.ml; //单位宽
    this.cols = Math.floor(this.totalWidth / this.perWidth); //列数（栏数）

    this.arrHei = []; //保存各列的高度

    this.confirmFirstPosition();
    this.confirmOtherPosition(this.cols);

}
WaterFall.prototype.confirmFirstPosition = function() {
    //排出第一行
    for (let i = 0; i < this.cols; i++) {
        this.aItems[i].style.top = 0;
        this.aItems[i].style.left = i * this.perWidth + "px";
        this.arrHei.push(this.aItems[i].offsetHeight);
    }
}

WaterFall.prototype.getMin = function() { //取数组的最小值和最小值索引
    this.minVal = Math.min.apply(null, this.arrHei); //最小值
    this.minIndex = this.arrHei.indexOf(this.minVal); //最小值索引
}

WaterFall.prototype.confirmOtherPosition = function(initIndex) { //确认其他区块位置

    for (let i = initIndex; i < this.aItems.length; i++) {
        this.getMin();
        this.aItems[i].style.left = this.aItems[this.minIndex].style.left;
        this.aItems[i].style.top = this.minVal + this.mt + "px";
        //更新最小高度那一列的高度值
        this.arrHei[this.minIndex] += this.aItems[i].offsetHeight + this.mt;
    }

}

WaterFall.prototype.scroll = function() { //随着滚动条滚动，不断的加载数据，排到页面的底部

    window.onscroll = () => {
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        this.getMin();

        if (st >= this.minVal - document.documentElement.clientHeight && st <= 10000) {
            var str = "";

            data.forEach(item => {
                var oDiv = document.createElement("div");
                str = `<span><a href=""><img src="${data[item].pimg}"></a>
                <p>新品上线，赶快来试试吧！</p>
                </span>

            <h4>${data[item].pdesc}</h4>
            <i>￥${data[item].pprice}</i>`
                oDiv.innerHTML = str;
                this.wrap.appendChild(oDiv);
            });
            //新增的区块按照之前的规律进行排列
            this.confirmOtherPosition(this.aItems.length - data.length);
        }

    }

}