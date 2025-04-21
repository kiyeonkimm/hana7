//오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
const assert = require("assert");
const { unstable_usePrompt } = require("react-router-dom");

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(txts, value) {
  return `${txts[0]}${value.toLocaleString().padStart(8)}${txts[1]}`;
}

//ex2
const unpperToLower = (str) =>
  str.replace(/[A-Z]/g, (foundStr) => `*${foundStr.toLowerCase()}*-`);
const low = unpperToLower("Senior Coding Learning JS");
console.log("🚀 ~ low:", low);

// const swapCase = (s) =>
//   s.replace(/[a-zA-Z]/g, (c) =>
//     c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
//   );

const swapCase = (str) =>
  str?.replace(/([A-Z\s]*)([a-z]*)/g, (foundStr, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });

console.log(swapCase("Senior Coding Learning JS"));

// function swapCase(str) {
//   return str
//     .replace(/[a-z]/g, (ch) => ch.toUpperCase())
//     .replace(/[A-Z]/g, (ch) => ch.toLowerCase());
// }

// function telfmt(telnum) {
//   if (/^01[016789]\d{8}$/.test(telnum)) {
//     return telnum.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
//   } else if (/^0\d{1,2}\d{7,8}$/.test(telnum)) {
//     return telnum.replace(/(0\d{1,2})(\d{3,4})(\d{4})/, "$1-$2-$3");
//   } else if (/^d{4}\d{4}$/.test(telnum)) {
//     return telnum.replace(/^d{4}\d{4}, "$1-$2");
//   } else {
//     return telnum;
//   }
// }

const telfmt = (telno) => {
  const len = telno?.length ?? 0;
  if (len <= 7) return telno;
  if (len == 8) return `${telno.substring(0, 4)}-${telno.substring(4)}`;

  let a = telno.startsWith("02") ? 2 : len > 10 ? len - 8 : 3;
  let b = len - a - 4;
  const reg = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{4})`);
  return telno.replace(reg, "$1-$2-$3");
};

assert.deepStrictEqual(telfmt("0704570"), "0704570");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");

assert.equal(
  swapCase("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 4 Class"), "hANARO 4 cLASS");
