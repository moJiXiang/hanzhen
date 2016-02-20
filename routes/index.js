var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("agents.sqlite");

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
    db.all("SELECT * FROM agent where name = $name", {$name: req.body.name}, function(err, row) {
        if(err) {
            throw err;
        }
        res.json(row);
    })
})

var requireAuthentication = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.render('login');
}

// router.all('/cms', requireAuthentication);
// 查询数据库
router.get('/cms', function(req, res) {
    var agents = [];
    // db.each("SELECT id, name, wheres FROM agent", function(err, row) {
    //     var obj = {"id": "", "name": "", "wheres": ""};
    //     obj.id = row.id;
    //     obj.name = row.name;
    //     obj.wheres = row.wheres;
    //     agents.push(obj);
    // }, function() {
    //     console.log(agents);
    //     res.render('cms', {"agents": agents});
    // })
    db.all("SELECT * FROM agent", function(err, row) {
        res.render('cms', {"agents": row})
    })
})

// 添加数据
router.post('/cms', function(req, res) {
    var agent = req.body;
    var agents = [];
    db.run("INSERT INTO agent(name, wheres) VALUES(?,?)", [agent.name, agent.wheres], function(err, row) {
        res.redirect('/cms')
        // db.each("SELECT name, wheres FROM agent", function(err, row) {
        //     var obj = {"name": "", "wheres": ""};
        //     obj.name = row.name;
        //     obj.wheres = row.wheres;
        //     agents.push(obj);
        // }, function() {
        //     res.render('cms', {"agents": agents});
        // })
    });
    // db.serialize(function() {
    //
    //     var stmt = db.prepare("INSERT INTO agent VALUES(?,?)");
    //     stmt.run(agent.name, agent.wheres);
    //     stmt.finalize();
    // }, function(err, row) {
    //     res.end()
    // })

})

router.delete('/cms', function(req, res) {
    var aid = req.body.aid;
    db.run("Delete from agent WHERE id = $aid", {$aid: aid});
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
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
