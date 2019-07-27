var connection = require("../config/connection.js");
//displaying question mark for val given
function printQuestionMarks(num){
 var arr =[];
 for (var i=0; i< num;i++){
     arr.push("?");
 }
 return arr.toString();
}

function objToSql(ob){
    var arr =[];
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
          // e.g. {sleepy: true} => ["sleepy=true"]
          arr.push(key + " = " + value);
        }
      }
    
      // translate array of strings to a single comma-separated string
      return arr.toString();
    }

var orm = {
    selectAll:function(tableName,callback){
    var queryString = "SELECT * FROM "+tableName+";";
    connection.query(queryString,function(err,result){
        if(err) { throw err};
        
        callback(result);
    })

    },
    //select All end closure
    insertOne:function(tableName,colName,userValue,callback){
     var queryString = "INSERT INTO "+tableName;

     queryString +=" (";
     queryString +=colName.toString();
     queryString +=") ";
     queryString +="VALUES (";
     queryString += printQuestionMarks(userValue.length);
     queryString +=") ";
     console.log(queryString);
     connection.query(queryString,userValue,function(err,result){
      if(err) {throw err};

      callback(result);
     });
    },
    //insert one end closure
    update:function(tableName,colName,condition,callback){
        var queryString = "UPDATE "+ tableName;
        queryString += " SET ";
        queryString += objToSql(colName);
        queryString += " WHERE ";
        queryString += condition;
          console.log(queryString)
        connection.query(queryString,function(err,result){
            if(err) { 
                throw err
            };

            callback(result);
        })
    },
    //update end closure
    delete:function(tableName,condition,callback){
        var queryString = "DELETE FROM "+ tableName;
        queryString += "WHERE";
        queryString +=condition;
        connection.query(queryString,function(err,result){
            if(err) {throw err};

            callback(result);
        })
    }
    ///delete end closure
}

module.exports = orm;