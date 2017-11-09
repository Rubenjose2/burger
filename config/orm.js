// Setup connection of Database
var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var QueryString = "SELECT * FROM ??";
        connection.query(QueryString, tableInput, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    }

};

module.exports = orm;