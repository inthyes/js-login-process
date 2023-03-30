"use strict";

const {response} = require("express");
const UserStorage = require("./UserStorage");

// class User{
//     constructor(body) {
//         this.body = body;
//     }

//     async login() {
//         const client = this.body;
//         try{
//             const user = await UserStorage.getUserInfo(client.id);
    
//             if (user) {
//                 if (user.psword === client.psword && user.psword === client.psword){
//                     return {success: true};
//                 }
//                 return {success: false, msg: "비밀번호가 틀렸습니다"};
//             }
//             return {success: false, msg: "존재하지 않는 아이디입니다"};
//             }catch (err) {
//             return {success: false, err};
//         }
        
//     }

//     async register() {
//         const client = this.body;
//         try{
//         const response = await UserStorage.save(client);

//         return response;
//         } catch (err) {
//             return {success : false, err};
//         }
//     }
// }


const bcrypt = require('bcrypt');

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        const match = await bcrypt.compare(client.psword, user.psword);
        if (match) {
          return { success: true };
        }
        return { success: false, msg: '비밀번호가 틀렸습니다' };
      }
      return { success: false, msg: '존재하지 않는 아이디입니다' };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(client.psword, salt);
      client.psword = hash;
      
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}


module.exports = User; 