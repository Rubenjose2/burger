var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    create: function(Values, cb) {
        orm.create("burgers", Values, function(res) {
            cb(res);
        })
    },
    update: function(Values, Id, cb) {
        orm.update("burgers", Values, Id, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;