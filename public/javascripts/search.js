$(document).ready(function() {
    $('#searchbtn').click(function() {
        var agent = $('#agent').val();
        var valiableshops = ['wypmm1111']
        var isTrueShop = valiableshops.indexOf(agent);
        if(isTrueShop < 0) {
            alert(agent + '  非汉珍御典中式男露代理，请谨慎购买其产品!');
        } else {
            alert(agent + '  为汉珍御典中式男露山东省总代理。');
        }
    })
})
