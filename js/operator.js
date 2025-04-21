const n = 1;
const b = true;
const c = false;
const nb = n + b;
const nc = n + c;

console.log("nb, nc", nb, nc);

const nil = null;
// const nil = [];
const n_nil = n + nil;
console.log("n_nil:", n_nil);

const undef = undefined;
const n_undef = n + undef;
console.log("n_undef:", n_undef);
console.log("+ '' =", +""); //0
console.log("+ undefined =", +undefined); //NaN

console.log("============");

let x = 5;
console.log(3 - -x); // 8        , 10 / 0 ⇒⇒⇒ error?
console.log(10 + -x * 2); // 0
console.log(-10 * -x * -2); // -100
console.log((-10 / -x) * -2); // -4
console.log(2 ** (3 ** 2)); // 512
console.log(x++, ++x); // 5 7    cf. log: function(x, y, …z)

console.log("============");
let aa = 1;
let bb = 2; // let a = 1; let b = 2;
let cc = (aa++, bb++); // 쉼표 연산자와 할당 연산자 ⇒ 증감연산자
let dd = (aa--, bb + aa);

console.log(aa, bb, cc, dd);
let bbb = "";
console.log(!!"");
