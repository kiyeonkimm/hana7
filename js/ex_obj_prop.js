const assert = require("assert");

//ex1-1
const arr = [100, 200, 300, 400, 500, 600, 700];
for (var k in arr) {
  console.log("k:", k);
}
console.log("================");
//ex1-2
for (var v of arr) {
  console.log("v:", v);
}
for (var k in arr) {
  console.log("v:", arr[k]);
}
console.log("================");
//ex1-3
const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };
for (var k in obj) {
  console.log("key:", k);
}
console.log("================");
//ex1-4
for (var k in obj) {
  console.log("value:", obj[k]);
}
console.log("================");
//ex1-5
for (var v of Object.values(obj)) {
  console.log("v:", v);
}

console.log("================");
//ex1-6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, "level", { enumerable: false });
console.log(Object.defineProperty(obj, "level", { value: 1, writable: false }));

//ex1-7
Object.freeze(obj);

//ex2-1
// const data = [
//   ["A", 10, 20],
//   ["B", 30, 40],
//   ["C", 50, 60, 70],
// ];

// function makeObjectFromArray(arrdata) {
//   let retObj = {};
//   for (const [k, ...v] of arrdata) {
//     retObj = { ...retObj, [k]: v };
//   }
//   return retObj;
// }

// assert.deepStrictEqual(
//   dataObj,
//   { A: [10, 20], B: [30, 40], C: [50, 60, 70] },
//   "dataObj is Not Equals!!"
// );

// assert.deepStrictEqual(
//   makeObjectFromArray([["A", 10, 20], ["B"], [1, 2, 3]]),
//   { A: [10, 20], B: [], 1: [2, 3] },
//   "dataObj is Not Equals!!"
// );

// function makeArrayFromObject(obj) {
//   const results = [];
//   for (const [key, val] of Object.entries(obj)) {
//     // console.log('🚀  key:', key, val);
//     results.push([key, ...val]);
//   }
//   return results;
// }
// const dataArr = makeArrayFromObject(dataObj);
// // console.log('🚀  dataArr:', dataArr);
// assert.deepStrictEqual(dataArr, data);

// //ex2-2
// function makeArrayFromObject(obj) {}

// console.log("================");
//ex3
//원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.

//1) shallow copy
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
function shallowCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.keys(obj)) {
    ret[k] = v;
  }
}
const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!

// 2) 이하 deep copy
const kim2 = {
  nid: 3,

  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

const newKim2 = deepCopy(kim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
