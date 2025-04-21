"use strict";

console.log("===============ex1");
const userr = { id: 1, name: "Hong", addr: { city: "Seoul" } };
// //이 user 객체를 받아서 id와 name을 출력하는 함수를 작성하시오.

function f1({ id, name }) {
  console.log(id, name);
}
function f2(obj) {
  const { id, name } = obj;
  console.log(id, name);
}

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

f1(hong);
f2(hong);
// //⇒ 1, 'Hong'        console.log(id, name)
console.log("===============ex2");

// //다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

// 1. 디스트럭처링으로 필요한 값만 추출
// const { id, name, addr } = user;
// 2. 새 객체 생성
// const userInfo = { id, name, addr };

//rest 연산자 사용
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log("===============ex3");

// //다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.(destructuring 활용)

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// cf. const id1 = arr[0][0].id; // Bad
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
// // 출력결과: 1 2 3

//const=[{id:id}]와 같이 변수 똑같으면 const=[{id}]와 동일

console.log("===============ex4");
const userrr = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getUserValueExceptInitial(k) {
  const { [k]: val } = userrr;
  const [, ...result] = val;
  return result.join("");
}
console.log(getUserValueExceptInitial("name")); // 'ong'
console.log(getUserValueExceptInitial("passwd")); // 'yz'
console.log(getUserValueExceptInitial("addr")); // 'eoul'
