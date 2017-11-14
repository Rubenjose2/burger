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
    },
    update: function(tableInput, Values, Id, cb) {
        var QueryString = "UPDATE ?? SET ? WHERE id = ?";
        var query = connection.query(QueryString, [tableInput, Values, Id], function(error, result, fields) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log(query.sql);
        })
    },
    delete: function(tableInput, Id, cb) {
        var QueryString = "DELETE FROM ?? WHERE id = ?";
        var query = connection.query(QueryString, [tableInput, Id], function(error, result, field) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log(query.sql);
        })
    }

};

module.exports = orm;