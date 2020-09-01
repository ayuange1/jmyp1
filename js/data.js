$(function() {
    var data = [{
            pimg: "../img/01.jpg",
            pname: "",
            pprice: 288,
            pdesc: "雅诗兰黛(Estee Lauder)新版抗蓝光小棕瓶眼霜15ml 淡化细纹/黑眼圈",
            uid: 38629
        },
        {
            pimg: "../img/02.jpg",
            pname: "",
            pprice: 96,
            pdesc: "【3盒装】蒂佳婷药丸面膜（蓝色补水镇静+绿色晒后修护+黑色清洁）",
            uid: 38629
        },
        {
            pimg: "../img/03.jpg",
            pname: "",
            pprice: 99,
            pdesc: "官方授权中国台湾•欣兰多媚卡雅黑冻膜225g",
            uid: 38629
        },
        {
            pimg: "../img/04.jpg",
            pname: "",
            pprice: 49.9,
            pdesc: "【聚美直发包邮】李佳琦推荐OMG蜜梨提拉紧致抗初老六胜肽面霜50g",
            uid: 38629
        },
        {
            pimg: "../img/05.jpg",
            pname: "",
            pprice: 25,
            pdesc: "【5款任选2件35,3件48,4件65包邮】泰国乳胶养胸嫩肌无钢圈无痕文胸",
            uid: 38629
        },
        {
            pimg: "../img/06.jpg",
            pname: "",
            pprice: 49,
            pdesc: "李佳琦推荐UNNY遮瑕笔遮瑕膏遮盖斑点痘印遮瑕液7.5g",
            uid: 38629
        },
        {
            pimg: "../img/07.jpg",
            pname: "",
            pprice: 29.9,
            pdesc: "【满2件35元,3件49元,4件65元】升级版抖音网红款透气束腰 收腹减肚子",
            uid: 38629
        },
        {
            pimg: "../img/08.jpg",
            pname: "",
            pprice: 79,
            pdesc: "SOFINA/苏菲娜瓷效控油保湿妆前乳防晒隔离霜底妆持久定妆25ml",
            uid: 38629
        },
        {
            pimg: "../img/09.jpg",
            pname: "",
            pprice: 49,
            pdesc: "【品牌直发】【赠起泡网】李佳琦推荐UNNY卸妆清洁保湿氨基酸洁面",
            uid: 38629
        },
        {
            pimg: "../img/10.jpg",
            pname: "",
            pprice: 102,
            pdesc: "资生堂 Fino渗透护发膜 230g*2",
            uid: 38629
        },
        {
            pimg: "../img/11.jpg",
            pname: "",
            pprice: 179,
            pdesc: "珂润(Curel) 浸润保湿套装【化妆水150ml 乳液120ml  洁面150ml 面霜40g】",
            uid: 38629
        },
        {
            pimg: "../img/12.jpg",
            pname: "",
            pprice: 45,
            pdesc: "【限时79元2套，118元3套】韩版棉质长袖睡衣套装舒适家居服 多款选",
            uid: 38629
        },
    ]

    $.each(data, function(i) {
        $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {

            pimg: data[i].pimg
            pname: "",
            pprice: data[i].pprice,
            pdesc: data[i].pdesc,
            uid: 38629
        }, data => {
            console.log(data);
        })
    })

})