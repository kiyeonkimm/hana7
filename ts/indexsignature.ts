type IS = {
  [k: number]: number; // [k: number]처럼 숫자 인덱스 시그니처를 쓸 때, 내부적으로 키는 문자열로 변환됨

  [k: symbol]: boolean;
  [k: string]: string | number;
};

const sym1: unique symbol = Symbol("s1");
let isobj1: IS = { id: "1", name: "Hong", 3: 5, [sym1]: false };

let isobj2: IS = { 3: 5, id: 3, 5: 44 };

{
  type A = { name: string; addr: string };
  const blockA: A = { name: "Hong", addr: "Busan" };
  console.log("🚀 blockA:", blockA);
}

//const outerA: A = { name: "Kim", age: 33 };
