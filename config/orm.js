// Setup connection of Database
var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var QueryString = "SELECT * FROM ?? ";
        connection.query(QueryString, tableInput, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },
    create: function(tableInput, Values, cb) {
        var QueryString = "INSERT INTO ?? SET ?";
        var query = connection.query(QueryString, [tableInput, Values], function(error, result, fields) {
            if (error) {
                throw error;
            }
            cb(result)
            console.log(query.sql);
        })
    }

};

module.exports = orm;