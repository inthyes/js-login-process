"use strict";

const db = require("../config/db");

class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => { 
            //newUsers에는 fields의 초기값이 들어가게 되는데, 
            //이 초기값은 내가 지정할 수 있고 다음 변수들은 field에 들어오게 된다
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        
        return newUsers;
    }

    static getUsers(isAll, ...fields){}

    static getUserInfo(id) {
        // db.query("SELECT * FROM users", (err, data) =>{
        //     console.log(data);

        sql="select * from users";

        db.query(sql,function(err,results,fields){
            if(err){
                console.log(err);
            }
            console.log(results);
        });
        // });
    }
 
   

    static async save(userInfo) {
        }
}
module.exports = UserStorage;