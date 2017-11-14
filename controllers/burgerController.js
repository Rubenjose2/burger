//Adding the ORM functionality into the system. This would pull all the queries definitions 
var express = require("express");
var router = express.Router();

// import the module

var burger = require("../models/burger.js");

// This section is printing all the burger inside the database
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});
// This section would create a new Burger
router.post("/api/burger", function(req, res) {
    burger.create(req.body, function(result) {
        res.json({ id: result.insertId });
    })
});
// This section would update the status of the Burger from ready to devoured
router.put("/api/burger/:id", function(req, res) {
    var burger_id = req.params.id;
    var Values = {
        devoured: 1
    }
    burger.update(Values, burger_id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
    console.log(burger_id, Values);
});
router.delete("/api/burger/:id", function(req, res) {
    var burger_id = req.params.id;
    burger.delete(burger_id, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;