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
            {"name": 'wypmm1111', 'where': '山东省总代理'},
            {"name": "mwd20150301", "where": "辽宁省总代理"},
            {"name": "cy257451", "where": "北京总代理"},
            {"name": "Adingjishangmao", "where": "河南省总代理"},
            {"name": "A98981998", "where": "三级代理"}];

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
