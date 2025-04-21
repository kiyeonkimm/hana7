const { del } = require("express/lib/application");

const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};
console.log("user:", user, user.true);
const keys = Object.keys(user);
console.log("🚀 keys:", keys, Reflect.ownKeys(user));
const oth = user[123];
console.log("oth:", oth, user["my-friends"], user.k);

const a = {};
const b = { k: 1 };
const c = { k: 2 };
a[b] = 77; // a['object Object'] = 77
a[c] = 99; // a['object Object'] = 99
console.log("a[b]:", a[b]); // a[{k:1}]

const hasId = user.hasOwnProperty("id");
console.log("hasId:", hasId);

delete user.id;
//delete user[sym];

class Dog {
  id = 1;
  static X = 2;
}

const dogId = Dog.id;
console.log("🚀 ~ dogId:", dogId);
const dogX = Dog.X;
console.log("🚀 ~ dogX:", dogX);

const str = '{"id":1, "name":"Hong"}';
const p1 = JSON.parse(str, function (k, v) {
  //k => key , v=> value
  console.log("kkkkkkk->", k, v);
  return "XXX";
});

console.log("p1:", p1);
let value = JSON.rawJSON("1234");
value = JSON.rawJSON('"str"');

if (JSON.isRawJSON(value)) {
  const rj = value.rawJSON;
  console.log("rj:", rj);
}
const svalue = JSON.stringify({ value });

console.log("🚀 ~ svalue:", svalue);
