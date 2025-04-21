//ex1
const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    // setTimeout(this.showMyName.bind(this), 1000);  //1번
    setTimeout(() => this.showMyName(), 1); //2번
    //화살표 함수가 아니므로
  },
};

dog.whatsYourName();

console.log("==============");

// same as weeks = '일월화수목금토' (: 유사배열객체)
function weekNameX() {
  return function (weekNo) {
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];
    return weeks[weekNo];
  };
}

const weekName = () => (weekNo) => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return weeks[weekNo];
};

const getWeekName = weekName();

// const getWeekName = function (weekNo) {
//   weeks[weekNo] = 555;
//   return `${weeks[weekNo]}요일`;
// };

const day = new Date().getDay();
console.log(`오늘은 ${getWeekName(day)}요일입니다!`);

console.log("==============");

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimerout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(cb, delay, ...args);
    timer = null;
  };
};

console.log("=================");

//오른쪽과 같이 함수를 한번만 실행하는 once 함수를 작성하시오.ex)

const once = (f) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    return f(...args);
  };
};

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// * try this
// 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
// (test 요령: 0.1초 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
// cf. function onceAgain(f, rebirthDelay = 1000) {}

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fnn = once(fivePart.bind({ id: 11 }));
console.log(fnn(1, 2));
const fn2 = once(fivePart);
console.log(fn2.bind({ id: 22 })(3, 4));

const onceAgain = (f, rebirthDelay) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    setTimeout(() => (done = !done), rebirthDelay);
    return f(...args);
  };
};

const fnlsec = onceAgain(fivePart, 1000);
let cntt = 0;

// const cb = () => console.log(`${++cntt / 10}초`, fnlsec(++cnt, 0.1));
// setInterval(cb, 100);

console.log("================= ex2");

const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const template = (f) => {
  return function (...args) {
    before();
    const result = f(...args);
    //after(result);
    process.nextTick(after, result);
    return result;
  };
};

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

console.log("================= ex3");

const weeks = ["일", "월", "화", "수", "목", "금", "토"];
let widx = -1;
const getNextWeek = () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cntx = 0;
const intl = setInterval(() => {
  widx += 2; // side-effect!

  console.log("call", cnt, getNextWeek());
  if ((cntx += 1) === 8) clearInterval(intl);
}, 1000);
