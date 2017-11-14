var connection = require("./config/connection.js");

var orm = {
    create: function(table, value) {
        var QueryString = "INSERT INTO ?? SET ?";
        var query = connection.query(QueryString, [table, value], function(error, results, fields) {
            console.log(query.sql);
        })
    }
}

orm.create("burgers", { burger_name: "Test4", devoured: 0 });

// var post = { burger_name: "Test3", devoured: 0 };
// var query = connection.query('INSERT burgers SET ?', post, function(error, results, fields) {
//     if (error) throw error;
//     // Neat!
// });
// console.log(query.sql);