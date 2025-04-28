"use strict";
const sym1 = Symbol("s1");
let isobj1 = { id: "1", name: "Hong", 3: 5, [sym1]: false };
let isobj2 = { 3: 5, id: 3, 5: 44 };
{
    const blockA = { name: "Hong", addr: "Busan" };
    console.log("🚀 blockA:", blockA);
}
//const outerA: A = { name: "Kim", age: 33 };
