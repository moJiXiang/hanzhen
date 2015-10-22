var express = require('express');
var router = express.Router();

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

router.post('/agentsearch', function(req, res) {
    var name = req.body.name
    res.locals.label = 'agentsearch';
    res.render('searchresult', {result: name});
})

router.get('/instruction', function(req, res) {
    res.locals.label = 'instruction';
  res.render('instruction');
});

router.get('/certification', function(req, res) {
    res.locals.label = 'certification';
  res.render('certification');
});

router.get('/qrcode', function(req, res) {
  res.render('qrcode');
});

router.get('/telephone', function(req, res) {
  res.render('telephone');
});

module.exports = router;
