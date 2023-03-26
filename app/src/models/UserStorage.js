"use strict";

const fs = require("fs").promises;

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

    static getUsers(isAll, ...fields){
        return fs
            .readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

   

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
           throw "이미 존재한다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
    
        //데이터 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return{success: true};
        }
}
module.exports = UserStorage;