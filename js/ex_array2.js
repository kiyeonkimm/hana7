const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

const addUser = (user) => [...users, user];
assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

// const removeUser = user => users.filter((u) => u.id !== user.id);
// const removeUser = user => users.filter(({id}) => id !== user.id);
const removeUser = ({ id: pid }) => users.filter(({ id }) => id !== pid);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

const changeUser1 = ({ id: fromId }, to) =>
  users.map((user) => (user.id === fromId ? to : user));

const changeUser = (from, to) =>
  users.map((user) => (user.id === from.id ? to : user));

assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

// -------------------------------
const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? (i++, arr[0]);
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

// --------------------------------
const arr = [1, 2, 3, 4, 5];

const square = (n) => n ** 2;
const cube = (n) => n ** 3;
const sqrt = Math.sqrt;

const xr1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = arr.map((a) =>
  [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr2:", xr2);
const xr3 = arr.map((a) =>
  [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr3:", xr3);
const xr4 = arr.map((a) =>
  [square, cube, (n) => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr4:", xr4);

// --------------------------------
//다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (step == 0 || start == end) return [start];
  // if (start > end && step>0 ) return [];
  // if (start < end && step<0 ) return [];
  if ((start - end) * step > 0) return [];
  if (end == undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      return [0];
    }
  }

  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }

  return results;
};

range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, …, 99, 100]
range(-5); // [-5, -4, -3, -2, -1]
range(5, 5); // [5]                  range(1, 5, 0); // [1]
range(5, 5, 0); // [5]                  range(0, 5);   // [0, 1, 2, 3, 4, 5]
range(5, 5, -1); // [5]                  range(0, -1);  // [0, -1]
range(5, 1, 1); // []                   range(0, -3);  // [0, -1, -2, -3]
range(1, 5, -1); // []                   range(-3, 0);  // [-3, -2, -1, 0]
range(1, 5, 6); // [1]                  range(5, 1);   // [5, 4, 3, 2, 1]
range(0); // [0]     range(0, 0);  // [0]      range(0, 0, 5);   // [0]
range(2, 1, -5); // [2]     range(0, -1, -5);  // [0]

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);

// --------------------------------

// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
// 함수를 작성하시오. (O(n^2) 이면 fail!!)

// function keyPair(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum) return [i, j];
//     }
//   }
// }

const keyPair = (arr, sum) => {
  const cache = {}; //value
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (cache[value]) return [cache[value], i];
    cache[sum - value] = i;
  }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
keyPair([1, 3, 4, 5], 7); // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9); // [3, 4]  or [1, 5]
//cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
