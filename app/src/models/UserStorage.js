"use strict";

const db = require("../config/db");

class UserStorage {

    static getUsers(isAll, ...fields){}

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            db.query("USE login", (err, result) => {
                const query = "SELECT * FROM users where id = ?;";
                if (err) reject(err);
                db.query(query, [id], (err, data) => {
                    if (err) reject(err);
                    console.log(data[0]);
                    resolve(data[0]);
                });
            });
        });
    }
    
   

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
          db.query("USE login", (err, result) => {
            if (err) {
              reject(`${err}`);
              return;
            }
            const query = "insert into users(id, name, psword) values(?, ?, ?);";
      
            db.query(
              query,
              [userInfo.id, userInfo.name, userInfo.psword],
              (err) => {
                if (err) reject(`${err}`);
                  reject(err);
                  resolve({ success: true });
                })
              }
            );
          });
        
      }
}
module.exports = UserStorage;