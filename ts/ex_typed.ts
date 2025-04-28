// 두 타입을 합치는 Combine 유틸리티 타입 만들기
// * 힌트: 두 타입의 같은 key 라면 union type, 그렇지 않다면 각 타입의 key type
//   - 공통키: 키들의 교집합(keyof T & keyof U)

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

// type Combine2<T, U> = {
//   [k in keyof (T & U)]: k extends keyof T & keyof U
//     ? T[k] | U[k]
//     : k extends keyof T
//     ? T[k]
//     : U[k];
// };

type Combine<T, U> = {
  [P in keyof (T & U)]: P extends keyof T & keyof U ? T[P] | U[P] : (T & U)[P];
};

type ICombined = Combine<IUser, IDept>;

let combineX: ICombined = {
  id: 0,
  age: 33,
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
let combineY: ICombined = {
  id: 0,
  age: "33세",
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};

//------------
//ex2: 특정 함수의 인자 타입을 추출하는 유틸리티 타입을 작성하시오. (infer)

function add1(a: number) {
  return `${a}`;
}
function add2(a: number, b: string) {
  return `${a} - ${b} `;
}
function add(a: number, b: string, c: boolean) {
  return `${a} - ${b} + ${c}`;
}

type FirstArgs<F> = F extends (a: infer First, ...rest: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...rest: any) => any
  ? Second
  : never;
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

// type FirstArgs<F> = F extends (arg1: infer A, ...args: any[]) => any
//   ? A
//   : never;
// type SecondArgs<F> = F extends (arg1: any, arg2: infer B, ...args: any[]) => any
//   ? B
//   : never;
// type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A1 = FirstArgs<typeof add1>; // number
type A2 = FirstArgs<typeof add2>; // number
type A3 = FirstArgs<typeof add3>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>; // ⇒ number

let a: A1 = 0;
let b: B = "abc";
let c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);

export {};
