interface A {
  a: string;
  b: string;
}
interface A {
  c: number;
  d: number;
}

const yarr: Array<number> = [];

let aa: A = {
  a: "a",
  b: "b",
  c: 1,
  d: 2,
};

type Xid = { id: number };
type Xname = { id: number; name: string };
type Xage = { id: number; age: number };
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;

type P = Xid | (Xname & Xage); // A + (B*C)
type Q = Xid & (Xname | Xage); // AB + AC

let xx: X = { id: 1, name: "Hong" };
xx = { id: 2, age: 33 };

let yy: Y = { id: 11, name: "Hong", age: 33 };

let pp: P = { id: 1 };
pp = { id: 1, name: "Kim", age: 44 };

let qq: Q = { id: 10, name: "Park" };
qq = { id: 10, name: "Park" };

//----------------
interface globalThis {
  x: string;
}

function f(this: globalThis) {
  console.log(this.x);
}

//f.bind(globalThis)();

export {};
