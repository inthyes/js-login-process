"use strict";

//module
const express = require("express");
const app = express();

//routing
const home = require("./home");


//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(3000,() => {
    console.log("서버가동");
});

app.use("/", home); //use -> 미들웨어 등록해주는 메서드

module.export = app;

