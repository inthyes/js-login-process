const mysql = require("mysql");

const db = mysql.createConnection({
    host : "login-lecture0.cjl0byivmoyv.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password: "ghkdgPtn12",
    databases: "login_lecture0"
});

db.connect();

module.exports =db;