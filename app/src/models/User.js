"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }

    login(){
        const client = this.body;
        const{id, psword} = UserStorage.getUserInfo(client.id);
      
        if (id){
            if (id === client.id && psword === client.psword){
                return{success:true};
            }
            return {success: false, msg:"비밀번호가 틀렸음"};
        }
        return {success: false, msg:"존재하지 않는 아이디임"};
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(this.body);
        return response;
    }
}
module.exports=User;