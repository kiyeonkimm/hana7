const n = 123; //8바이트
const bi = 123n; //16바이트

const n___bi = n === bi;
console.log("n___bi", n___bi);

const n__bi = n == bi;
console.log("n__bi", n__bi);

// const nAdbi = n + Number(bi);
const nAdbi = BigInt(n) + bi;
console.log("nAdbi", nAdbi, typeof nAdbi);

const s = "abc";
const ss = new String("abc");
const s__ss = s == ss;
const s___ss = s === ss;
console.log("s__ss", s__ss, typeof s);
console.log("s___ss", s___ss, typeof ss);
const sNum = Number(s);
console.log("sNum:", sNum);
const ssNum = Number(ss);
console.log("ssNum:", ssNum);
console.log("Number(s) == Number(ss)", Number(s) == Number(ss), isNaN(sNum));
const sss = `${s} - ${n + Number(bi)}`;
// ==> s + '-' + ( n + Number(bi))
console.log("sss:", sss);

console.log("-----------");
const s1 = Symbol("foo");
const s2 = Symbol("foo");
const s1__s2 = s1 == s2;
console.log("s1__s2:", s1__s2);

const seoulHong = Symbol.for("H");
const busanHong = Symbol.for("H");
const s__p = seoulHong == busanHong;
console.log("seoulHong == busanHong:", s__p);

const undef = undefined;
const nil = null;
const undef__nil = undef == nil;
const undef___nil = undef === nil;
console.log("undef__nil,", undef__nil);
console.log("undef___nil,", undef___nil);

console.log("============");

const hong = { id: 1, name: "Hong" };
let kim = { id: Symbol(), name: "Kim" };
console.log(hong === kim);
kim = hong;
console.log(hong === kim);

const o1 = new Object();
const o2 = {};
console.log("o1 === o2", o1 === o2);
console.log("o1 == o2", o1 == o2);

const nStr = n.toString();
const nStr2 = new Number(n).toString();
console.log("nStr:", nStr, typeof nStr);
console.log("nStr2:", nStr2, typeof nStr2);

const nStr16 = n.toString(16);
console.log("nStr16:", nStr16);
const nStr16d = parseInt(nStr16, 16);
console.log("nStr16d:", nStr16d);

let a = 1;
const b = ((a.b = 5), console.log("xx>>", a.b)); //undefined
console.log(a, b);

a = 1;
console.log("xx>>", a.b, a.toString() == "1");
console.log(a);
