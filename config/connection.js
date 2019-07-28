var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Sairakshna5*",
//     database: "burgers_db"
// });

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:'localhost',
        uses: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });
};
connection.connect();

module.exports = connection;