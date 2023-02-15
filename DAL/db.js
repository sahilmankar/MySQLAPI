var mysql = require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'actsdb'
});

connection.connect(function(err){
    if(err)
    throw err
    console.log(" Connected to Database sucessfully");
});

module.exports=connection;