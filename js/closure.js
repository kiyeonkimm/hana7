const DC_RATE = 0.5;

function discount() {
  const dcRate = 0.5;
  return function (price) {
    return price * dcRate;
  };
}

const discount2 = () => (price) => price * DC_RATE;

//curying
const MENU = { chinese: ["자장면", "탕수육"], italian: ["pizza", "pasta"] };
function restaurant(kind) {
  const menu = MENU[kind];
  return function (menuIndex) {
    return menu[menuIndex]; //menu.['chinese']
  };
}

const lunch = restaurant("chinese");
console.log(lunch(1));

const dinner = restaurant("italian");
console.log(dinner(0), dinner(1));

//출입자 수를 게이트 별로 구하는 함수를 작성하세요.

function getCounter() {
  let currCount = 0;
  return {
    plus() {
      currCount += 1;
    },
    minus() {
      currCount -= 1;
    },
    get count() {
      return currCount;
    },
    // count() {
    //   currCount;
    // },
  };
}

// class Counter {
//   #currCount = 0;
//   plus() {
//     this.#currCount += 1;
//   }
//   minus() {}
// }

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate1.plus();
gate2.plus();
gate2.minus();

console.log("gate1>>", gate1.count);
console.log("gate2>>", gate2.count);

console.log("=================");
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

const f3 = factorial(3);
console.log("🚀 ~ f3:", f3);

const f5 = factorial(5);
console.log("🚀 ~ f5:", f5);

let n = 3;
let sum = 1;
for (let i = n; i > 0; i -= 1) {
  sum = sum * i;
}
console.log("🚀 ~ sum:", sum);

function factorialTCO(n, acc = 1) {
  if (n == 1) return acc;
  return factorialTCO(n - 1, acc * n);
}
console.log("🚀 factorialTCO:", factorialTCO(3));

//ex
arr = [];
// function makeArray(n) {
//   for (let j = 0; j < n; j += 1) {
//     arr[j] = j + 1;
//   }
//   return arr;
// }

function makeArray(n) {
  if (n == 1) return [1];
  return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
  if (n == 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}

console.log("🚀 ~ makeArray:", makeArray(10));
// reversearr = [];
// function makeReverseArray(n) {
//   for (let j = n; j > 0; j -= 1) {
//     reversearr[j] = n - j + 1;
//   }
//   return reversearr;
// }

console.log("🚀 ~ makeReverseArray:", makeReverseArray(5));

function makeArrayTCO(n, acc = []) {
  if (n == 1) return [1, ...acc];
  return [n - 1, [n, ...acc]];
}
console.log("🚀 ~ makeArrayTCO ~ makeArrayTCO:", makeArrayTCO(5));
