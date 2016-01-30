var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("abcd");

/* GET home page. */
router.get('/', function(req, res) {
  res.locals.label = 'index';
  res.render('index');
});

router.get('/product', function(req, res) {
    res.locals.label = 'product';
  res.render('product');
});

router.get('/agentsearch', function(req, res) {
    res.locals.label = 'agentsearch';
  res.render('agentsearch');
});


var requireAuthentication = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.render('login');
}

// router.all('/cms', requireAuthentication);
// 查询数据库
router.get('/cms', function(req, res) {
    var users = [];
    db.each("SELECT id, dt FROM user", function(err, row) {
        users.push(row.dt);
    }, function() {
        console.log(users);
        res.render('cms');
    })
})

// 添加数据
router.post('/cms', function(req, res) {

})
// router.post('/agentsearch', function(req, res) {
//     var name = req.body.name
//     var valiableshops = ['wypmm1111']
//     var isTrueShop = valiableshops.indexOf(name);
//     res.locals.label = 'agentsearch';
//     if (isTrueShop < 0) {
//         var result = {
//             result: name,
//             isTrue: false
//         }
//     } else {
//         var result = {
//             result: name,
//             isTrue: true
//         }
//     }
//     res.render('searchresult', result);
// })

router.get('/instruction', function(req, res) {
    res.locals.label = 'instruction';
  res.render('instruction');
});

router.get('/certification', function(req, res) {
    res.locals.label = 'certification';
  res.render('certification');
});

router.get('/qrcode', function(req, res) {
    res.locals.label = '';
  res.render('qrcode');
});

router.get('/telephone', function(req, res) {
    res.locals.label = '';
  res.render('telephone');
});

module.exports = router;
