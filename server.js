var express = require("express");

var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8085;
var app = express();

app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static("public"));

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT,function(){
    console.log("Server listening : "+PORT);
});


