const str = "Senior Coding Learning JS";
const a = /(A-z\d)/.test(str); // false
console.log("🚀 ~ a:", a);
const b = /[A-z\d]/.test(str); // true
console.log("🚀 ~ b:", b);
const c = /(A-z\d)/.test("XA-z2"); // true
console.log("🚀 ~ c:", c);
const d = /(A-z\d)/.test("XAz2"); //false
console.log("🚀 ~ d:", d);

const regexp1 = /[A-Z]/;
const r11 = regexp1.test(str);
console.log("🚀 r11:", r11);

console.log("----------------");
const regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("OK1");
if (regexp.test("Senior Developer")) console.log("OK2");
if (regexp.test("JS Coding")) console.log("OK3");
if (regexp.test("JavaScript Coding")) console.log("OK4");
