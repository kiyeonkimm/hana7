const assert = require("assert");
const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    const results = [];
    for (let i=0; ) {
      promi
        .then((res) => {
          results.push(res);
          if (promises.length == results.length) resolve(results);
        })
        .catch(reject);
    }
  });

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, [1, 2, 3]);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
