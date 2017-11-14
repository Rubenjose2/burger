//Adding the ORM functionality into the system. This would pull all the queries definitions 
var express = require("express");
var router = express.Router();

// import the module

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/burger", function(req, res) {
    burger.create(req.body, function(result) {
        res.json({ id: result.insertId });
    })
});
module.exports = router;