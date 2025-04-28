"use strict";
//ex1) 특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기
Object.defineProperty(exports, "__esModule", { value: true });
const stock = { X: 1, Y: 2, Z: 30 };
const itemPrices = [
    { item: "X", price: 1000 },
    { item: "Y", price: 2000 },
    { item: "Z", price: 3000 },
];
const total = itemPrices.reduce((curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price, 0);
function deleteArray(arr, startOrKey, endOrValue) {
    if (typeof startOrKey === "number") {
        if (typeof endOrValue === "number") {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }
    if (typeof startOrKey === "string") {
        return arr.filter((e) => {
            if (e && typeof e === "object") {
                return e[startOrKey] !== endOrValue;
            }
        });
    }
    return [];
}
const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]
const users = [
    { id: 1, name: "Hong" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Lee" },
];
console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]
//
let x = { id: 1, name: "Hong" };
//const z = jadeX;
