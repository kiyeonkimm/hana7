"use strict";
//ex1---------------
const isStringNumber = (value) => {
    return (Array.isArray(value) &&
        value.length === 2 &&
        typeof value[0] === "string" &&
        typeof value[1] === "number");
};
const f1 = (value) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};
f1(["item", 1000]);
class Retriever {
    name;
    constructor(name) {
        this.name = name;
    }
}
function isDog(a) {
    return "name" in a && typeof a.name == "string";
}
const maxx = { name: "Maxx" };
if (isDog(maxx))
    console.log(maxx.name, "is Dog!");
const gunhee = new Retriever("Gunhee");
// gunhee.name='Gunhee';
if (isDog(gunhee))
    console.log(gunhee.name, "is Dog!");
//ex2---------------
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.
const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
};
const isErrorWithMessage = (error) => typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string";
// (error as Record<string, unknown>).message === 'string'
const toErrorWithMessage = (error) => isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));
try {
    throw new Error("some error!!!!"); // 가
    throw "some string error!!!"; // 나
    throw ["some", "array", "error"]; // 다
}
catch (error) {
    console.log(error.message); // (라)
}
function deleteArray(arr, startOrKey, endOrValue) {
    if (typeof startOrKey === "number") {
        if (typeof endOrValue === "number") {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }
    if (typeof startOrKey === "string") {
        arr.filter((e) => {
            if (e && typeof e === "object") {
                // e['id'];  error
                // e[startOrKey];  error
            }
        });
    }
    if (typeof startOrKey === "symbol") {
    }
    return [];
}
