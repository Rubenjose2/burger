//Adding the ORM functionality into the system. This would pull all the queries definitions 
var orm = require("./burgerController");

var burger = {
    all: function(cb) {
        orm.all("burges", function(res) {
            cb(res);
        })
    }
}