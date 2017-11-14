// Calling the express and body parser package 
var express = require("express");
var bodyParser = require("body-parser");
// Setting up the port 
var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//Set HandleBars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(PORT);