var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

///display all records in table burger

router.get("/",function(req,res){
    burger.selectAll(function(data){
         
        var burgerDisplay = {
            burgers : data
        }
        res.render("index",burgerDisplay);
    });
});

//insert data into the table burger

router.post("/app/burger",function(req,res){
    burger.insertOne(["burger_name"],[req.body.burger_name],function(data){
        res.json({id :data.insertId});
    });
});
///update one into the table

router.put("/app/burger/:id",function(req,res){
     var condition = "id = "+req.params.id
    burger.update({devoured : req.body.devoured},condition,function(data){
      if(data.changedRows === 0){
          return res.status(404).end();
      }
      else{
        res.status(200).end();
      }
      
    });
});
///////delete or devored make in the burger table
router.delete("/app/burger/:id",function(req,res){
    var condition = "id = " + req.params.id;
    burger.delete(condition,function(data){
        if(data.affectedRow === 0){
           return res.ststus(404).end();
        }
        else{
            res.status(200).end();
        }
        
        
    });
});


///exporting the controller file

module.exports = router;