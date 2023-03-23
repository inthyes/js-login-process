"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output ={
    hello : (req, res) =>{
        res.render("home/index");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login : (req, res) => {
        const user = new User(req.body); //여기서의 body가 User클래스의 body로 들어감
        const response = user.login();
        return res.json(response);

    },
};

module.exports = {
    output,
    process,
};

