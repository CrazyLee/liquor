
window.store = {

    wines: {},

    populate: function () {

        this.wines[1] = {
            id: 1,
            name: "53°茅台飞天",
            price: "￥1299",
            region: "贵州",
            smell: "酱香型",
            material: "高粱、小麦",
            volume: "500ml",
            alcohol: "53%",
            description: "茅台酒素以色清透明、醇香馥郁、入口柔绵、清冽甘爽、回香持久等特点而名闻天下，历届国家名酒评比之冠，尊为国酒。",
            picture: "maotai.jpg"
        };
        this.wines[2] = {
            id: 2,
            name: "52°五粮液陈酿",
            price: "￥1380",
            region: "四川",
            smell: "浓香型",
            material: "高粱、大米、糯米",
            volume: "500ml",
            alcohol: "52%",
            description: "五粮液陈酿也叫五粮液陈酿熊猫酒乃艺术与品质的完美结合，它的原酒取自五粮液集团公司传世的陈年老窖，经精心勾兑而成，品质超凡乃酒中上佳珍品。",
            picture: "wly.jpg"
        };
        this.wines[3] = {
            id: 3,
            name: "53°十年红花郎",
            price: "￥369",
            region: "四川",
            smell: "酱香型",
            material: "高粱、小麦",
            volume: "500ml",
            alcohol: "53%",
            description: "十年红花郎是四川郎酒集团有限责任公司重点推出的系列酒之一。具有酒质香浓、醇厚、味陈、甜爽、尾净舒适、风格优美的特点。",
            picture: "lang.jpg"
        };
        this.wines[4] = {
            id: 4,
            name: "53°二十年青花汾酒",
            price: "￥498",
            region: "山西",
            smell: "清香型",
            material: "高粱、大麦、豌豆",
            volume: "500ml",
            alcohol: "53%",
            description: "青花汾酒的瓶身由被誉为“玲珑之子”的著名国际陶艺家王宗涛设计，采用了中国传统的青花瓷风格，以“汾”字为主体，写满了各种字体的“酒”字，从汉字发展的角度阐释了汾酒的悠久历史。",
            picture: "fen.jpg"
        };
        this.wines[5] = {
            id: 5,
            name: "52°国窖1573",
            price: "￥1389",
            region: "四川",
            smell: "浓香型",
            material: "高粱、小麦",
            volume: "500ml",
            alcohol: "52%",
            description: "国窖1573窖香优雅、绵甜爽净、柔和协调、尾净香长,完全按照古法酿制。",
            picture: "1573.jpg"
        };
        this.wines[6] = {
            id: 6,
            name: "52°剑南春珍藏级特酿",
            price: "￥549",
            region: "四川",
            smell: "浓香型",
            material: "高粱、大米",
            volume: "500ml",
            alcohol: "52%",
            description: "珍藏级剑南春，创领酿酒基于的极致，登陆白酒品质的巅峰，树立中国名酒的里程碑!",
            picture: "jnc.jpg"
        };
        this.wines[7] = {
            id: 7,
            name: "46°洋河蓝色经典",
            price: "￥399",
            region: "江苏",
            smell: "浓香型",
            material: "高粱、小麦",
            volume: "480ml",
            alcohol: "46%",
            description: "世界上最宽广的是海，比大海更远的是天空，比天空更广阔的是男人的情怀。",
            picture: "yanghe.jpg"
        };
        this.wines[8] = {
            id: 8,
            name: "53°水晶水井坊",
            price: "￥858",
            region: "四川",
            smell: "浓香型",
            material: "高梁、玉米",
            volume: "500ml",
            alcohol: "53%",
            description: "如水晶般晶莹剔透的外罩，酒色透过两层瓶壁，仍然通通透透，尽现水井坊的不凡酒质。",
            picture: "sjf.jpg"
        };
        this.wines[9] = {
            id: 9,
            name: "52°牛栏山典藏",
            price: "￥168",
            region: "北京",
            smell: "清香型",
            material: "高粱",
            volume: "500ml",
            alcohol: "52%",
            description: "可谓好水酿地道好酒，牛栏山典藏陈酿取第二锅之贵酿精心酿造出一款奇香溢鼻、杯酒下肚，满口余香的典藏陈酿。",
            picture: "nls.jpg"
        };
        this.wines[10] = {
            id: 10,
            name: "52°泸州老窖",
            price: "￥998",
            region: "四川",
            smell: "浓香型",
            material: ",高粱、大米、小麦",
            volume: "3000ml",
            alcohol: "52%",
            description: "泸州地处巴蜀，泸州老窖的历史，与源远流长巴蜀酒文化密切相关。",
            picture: "luzhou.jpg"
        };
        this.wines[11] = {
            id: 11,
            name: "52°酒鬼酒和谐馥郁",
            price: "￥208",
            region: "湖南",
            smell: "馥郁香型",
            material: "高粱、糯米",
            volume: "475ml",
            alcohol: "52%",
            description: "酒鬼系列酒是以高粱、糯米、小麦为原料，利用武陵山脉振武营金龟山脚下的三眼泉水酿制而成。",
            picture: "jiugui.jpg"
        };
        this.wines[12] = {
            id: 12,
            name: "凤香经典",
            price: "￥488",
            region: "陕西",
            smell: "凤香型",
            material: "高粱、小麦",
            volume: "500ml",
            alcohol: "45%",
            description: "西凤香酒为浓香型西凤酒是采用人工老窖技术，纯粮酿造。具有香气浓郁、绵甜爽净、醇和圆润、回味悠长的独特风格。",
            picture: "xifeng.jpg"
        };
       
        this.lastId = 12;
    },

    find: function (model) {
        return this.wines[model.id];
    },

    findAll: function () {
        return _.values(this.wines);
    }
    
};

store.populate();

// 重写 Backbone.sync() 
Backbone.sync = function (method, model, options) {

    var resp;

    switch (method) {
        case "read":
            resp = model.id ? store.find(model) : store.findAll();
            break;        
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};