//ex1
for (let i = 0.1; i < 1; i = i + 0.1) console.log(+i.toFixed(1));
console.log("===============");

//ex2
for (let i = 1; i <= 10; i++) {
  const root = Math.sqrt(i);
  if (root % 1) console.log(i, root.toFixed(3));
}
console.log("===============");

//ex3
const today = new Date().getDay();
let weekName = "일월화수목금토"[today];
console.log(weekName);
console.log(`오늘은 ${weekName}요일입니다`);
console.log("===============");

//ex4
function plength(n) {
  // 0.1 ==> '0.1'
  if (Number.isInteger(n)) return 0;
  return n.toString().length - Math.trunc(n).toString().length - 1;
}
function addPoints1(a, b) {
  const alen = plength(a);
  const blen = plength(b);
  console.log("🚀 alen:", a, b, alen, blen);
  const ret = (a + b).toFixed(alen > blen ? alen : blen);
  console.log(a, "+", b, "= ", +ret);
}
function addPoints2(a, b) {
  // console.log(a, '+', b, '=', a + b);
  const p = 10 ** 10;
  const ai = a * p;
  const bi = b * p;
  const ret = Math.trunc(ai + bi) / p;
  console.log(a, "+", b, "= ", +ret);
}
function addPoints3(...args) {
  const p = 10 ** 10;
  let ret = 0;
  for (const n of args) {
    ret += Math.trunc(n * p);
  }
  ret = ret / p;
  console.log("🚀 ret:", ret);
}

function subPoints(...args) {
  calc(-1, ...args);
}
function addPoints(...args) {
  calc(+1, ...args);
}
function calc(signFlag, ...args) {
  p = 10 ** 10;
  let ret = 0;
  for (const [i, n] of Object.entries(args)) {
    console.log(i, n);
    const signNum = i != 0 ? n * signFlag : n;
    ret += Math.trunc(signNum * p);
  }
  ret = ret / p;
  console.log(args.join(` ${signFlag > 0 ? "+" : "-"} `), "=", ret);
}
//addPoints1(22, 23);
// subPoints(0.45, 0.12);
// addPoints(0.21354, 0.1, 0.2); // 0.51354
// addPoints(0.14, 0.28, 0.3, 0.5, 0.92); // 0.42
// addPoints(0.34, 0.226); // 0.566
// addPoints(10.34, 200.226); // 210.566
// addPoints(0.143, -10.28); // -10.137
// addPoints(0.143, -10); // -9.857
//return;

//ex5
const prices = [10.34, "xxx", 5.678, null, 20.9, 1.005, 0, 19, undefined, 0.5];

// let newArr = prices.filter((element) => {
//   return typeof element === "number";
// });

// const sum = newArr.reduce((a, b) => a + b, 0);
// const avg = sum / newArr.length;
// console.log("avg:", avg.toFixed(2));

// array.reduce((누적값, 현재값) => {
//     return 누적값 + 현재값;
// }, 초기값);

const P = 10 * 10;
const PointLength = 10 ** 2;
let sum = 0;
let cnt = 0;
for (const n of prices) {
  if (n === null || isNaN(n)) continue;
  cnt += 1;
  sum += Math.trunc(n * P);
}
const avg = Math.trunc(((sum / P) * PointLength) / cnt) / PointLength;
console.log("🚀 avg:", avg);
