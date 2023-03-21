"use strict";

const { reduce } = require("async");

class UserStorage{
    static #users={
        id:["hyesoo","hejin","healin"],
        psword:["1234","1234","12111"],
        name: ["혜수","희진","혜린"],
    };
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };
}

module.exports = UserStorage;