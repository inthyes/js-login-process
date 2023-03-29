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
            const query = "INSERT INTO users(id, name, psword) VALUES (?, ?, ?);";
        
            db.query(
              query,
              [userInfo.id, userInfo.name, userInfo.psword],
              (err, result) => {
                if (err) {
                  reject(`${err}`);
                  return;
                }
                resolve({ success: true });
              }
            );
          });
        });
      }
      
}
module.exports = UserStorage;