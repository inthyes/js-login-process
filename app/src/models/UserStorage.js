"use strict";

class UserStorage {
    static #users = {
        id: ["codus", "woorimIT", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["챈","우리밋","김팀장"],

    };

    static getUsers(...fields){
        const users = this.#users;
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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success : true };
    }
}

module.exports = UserStorage;