const mysql = require("mysql");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '0000',
    databases: 'login'
});

db.connect();

module.exports =db;