"use strict";

const id = document.querySelector("#id"), //id 태그로 부여되어있는 id를 불러와라
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}
