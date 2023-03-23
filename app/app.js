// const http = require("http"); //내장모듈
// const app = http.createServer((req,res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//     if (req.url === "/"){
//         res.end("여기는 루트입니다");
//     } else if (req.url === "/login"){
//         res.end ("여기는 로그인입니다");
//     }
// });


// app.listen(3001, () =>{
//     console.log("http로가동된 서버입니다");
// });
"use strict";

//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
//{dirname}은 현재 있는 app.js의 위치를 반환해준다. app.js안에있는 
//src안에있는 public 폴더를 정적 경로를 만들어줌

app.use("/",home); //미들웨어를 등록해주는 메소드


module.exports = app;
