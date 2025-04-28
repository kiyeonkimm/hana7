"use strict";
const myName = "Kiyeon";
let age;
age = 33;
const something = ({ id, name, age, address }) => {
    console.log(id, name, age, address);
};
const user = { id: "1", name: "Hong", age: 33, address: "Seoul" };
something(user);
let x = "str";
let y = x;
let z;
let cust;
let m;
let g;
let mg;
cust = {
    name: "홍길동",
    addr: "용산구",
    discountRate: 0.1,
};
mg = cust;
