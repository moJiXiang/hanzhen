$(document).ready(function() {
    $('#searchbtn').click(function() {
        var agent = $('#agent').val();
        var valiableshops = ['wypmm1111']
        var isTrueShop = valiableshops.indexOf(agent);
        if(isTrueShop < 0) {
            alert(agent + '  店铺非正规授权店铺，所出售商品可能非本公司正规产品，请谨慎购买!');
        } else {
            alert(agent + '  店铺为正规授权店铺，所出售商品为正品商品，请放心购买。');
        }
    })
})
