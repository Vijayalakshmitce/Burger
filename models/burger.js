var orm = require("../config/orm.js");

var burger ={
    selectAll:function(cb){
        orm.selectAll("burgers",function(result){
            cb(result);
        });
    },
    //select All end closure here
    
        insertOne:function(colName,userValue,cb){
            orm.insertOne("burgers",colName,userValue,function(result){
           cb(result);
            });
    },
    //insertone end closure here
    update:function(colName,condition,cb){
        orm.update("burgers",colName,condition,function(result){
          
            
            cb(result);
        });
    },
    //update end closure
    delete:function(condition,cb){
        orm.delete("burgers",condition,function(result){
            cb(result);
        });
    }
    //delete end closure
};

////export of burger.js

module.exports = burger;
