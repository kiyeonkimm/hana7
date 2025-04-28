"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tuple() {
    const a = [1, "lim", false];
    let b = [a[0], a[1]];
    console.log("🚀 b:", b);
}
tuple();
const greeting = (greet, name, age) => {
    console.log(`${greet}~!    
                    ${name}, You are ${age}.`);
};
greeting("Hi", "Hong", 33);
const tup = ["Kim", 55];
greeting("Hello", ...tup);
const arr = ["Park", 44];
//greeting("Hi", arr[1]);
//----------------
const arrr = [1, 2, 3];
const arr1 = [4, 5, 6];
