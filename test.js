var fs = require('fs');
var file = "test.db";
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
    if(!exists) {

        db.run("CREATE TABLE user (id INT, dt TEXT)");

        var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
        for (var i = 0; i < 10; i++) {
            var d = new Date();
            var n = d.toLocaleTimeString();
            stmt.run(i, n);
        }

        stmt.finalize();
        db.each("SELECT id, dt FROM user", function(err, row) {
            console.log("User id: " + row.id, row.dt);
        })
    }
})

db.close();
