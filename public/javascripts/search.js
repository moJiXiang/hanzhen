$(document).ready(function() {
    $('#searchbtn').click(function() {
        var agent = $('#agent').val();
        var result = checkTrue(agent);
        console.log(result);
        if(result.isTrueShop) {
            alert(agent + '  为汉珍御典中式男露'+ result.valiableshop.where +'。');
        } else {
            alert(agent + '  非汉珍御典中式男露代理，请谨慎购买其产品!');
        }
    })

    function checkTrue(agent) {

        var valiableshops = [
            {"name": "mwd20150301", "where": "辽宁省总代理"},
            {"name": "cy257451", "where": "北京总代理"},
            {"name": "Adingjishangmao", "where": "河南省总代理"},
            {"name": "A98981998", "where": "三级代理"},
            {"name": "dyhh315", "where": "一级代理"},
            {"name": "cy500600", "where": "黑龙江总代理"},
            {"name": "138031131", "where": "湖南总代理"},
            {"name": "zc800600", "where": "广东总代理"},
            {"name": "xqqqeee", "where": "浙江总代理"},
            {"name": "AC18881888888", "where": "江苏总代理"},
            {"name": "xiefei0716", "where": "河北总代理"},
            {"name": "xqt17888", "where": "山西总代理"},
            {"name": "yesemei1234", "where": "官方运营"},
            {"name": "ysm5216688", "where": "官方运营"},
            {"name": "wypmm111", "where": "山东总代理"},
            {"name": "18776799999", "where": "广西总代理"},
            {"name": "A98981998", "where": "吉林总代理"},
            {"name": "18776799999", "where": "广西总代理"},
            {"name": "whx20101116", "where": "分销"},
            {"name": "L287147617", "where": "分销"},
            {"name": "15299755056", "where": "分销"},
            {"name": "s972730538", "where": "三级代理"},
            {"name": "S065333", "where": "三级代理"},
            {"name": "aiq89999", "where": "三级代理"},
            {"name": "bao4455667788", "where": "三级代理"},
            {"name": "13721296968", "where": "安徽总代理"},
            {"name": "chijiuai1314", "where": "一级代理"},
            {"name": "beibei995566", "where": "运营总部"},
            {"name": "ydsy116114", "where": "一级代理"},
            {"name": "A_1612604272", "where": "分销"},
            {"name": "ting085688", "where": "分销"},
            {"name": "yangzeming03", "where": "分销"},
            {"name": "Cy15996544001", "where": "分销"},
            {"name": "738168104", "where": "分销"},
            {"name": "h2695525776", "where": "一级代理"},
            {"name": "a83482000", "where": "一级代理"},
            {"name": "C13006546271", "where": "福建总代理"},
            {"name": "jianghuld111", "where": "分销"},
            {"name": "wbt-12", "where": "分销"},
            {"name": "mq223438", "where": "二级代理"},
            {"name": "a5633365", "where": "内蒙古总代理"},
            {"name": "a13827755196", "where": "一级代理"},
            {"name": "xu647890960", "where": "分销"},
            {"name": "seyou000", "where": "分销"},
            {"name": "fang928158462", "where": "分销"},
            {"name": "licong_136213360", "where": "二级代理"},
            {"name": "WKFC1122", "where": "分销"},
            {"name": "shenaijun1022", "where": "分销"},
            {"name": "610775777", "where": "分销"},
            {"name": "w1234ABCD20", "where": "分销"},
            {"name": "kr5254934", "where": "分销"},
            {"name": "aaa2252713613", "where": "分销"},
            {"name": "lolddgzs", "where": "湖北总代理"},
            {"name": "YIU2580", "where": "分销"},
            {"name": "derjump", "where": "安徽总代理"},
            {"name": "jia-jia6680", "where": "分销"},
            {"name": "longnvguoji", "where": "分销"},
            {"name": "hua15621733387", "where": "分销"},
            {"name": "zhsmAc111", "where": "分销"}
        ];

        var isTrueShop, valiableshop;
        valiableshops.forEach(function(obj) {
            console.log('xiang', obj.name == agent);
            if(obj.name == agent) {
                isTrueShop = true;
                valiableshop = obj;
            }
        })
        console.log(isTrueShop)
        console.log(valiableshop);
        return {isTrueShop: isTrueShop, valiableshop: valiableshop};
    }
})
