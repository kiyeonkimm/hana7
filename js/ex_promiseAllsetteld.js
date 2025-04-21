const assert = require("assert");
const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAllSettled = (promises) =>
  new Promise((resolve, reject) => {
    const results = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          const status = "fulfilled";
          const value = res;
          results[i] = { status, value };
          runCnt++;
          if ((runCnt == promises, length)) resolve(results);
        })
        .catch((err) => {
          const status = "rejected";
        });
    }
  });

promiseAllSettled([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    // console.log(JSON.stringify(array, null, '  '));
    console.log("여긴 과연 호출될까?!");
    assert.deepStrictEqual(array, allSettledResults);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

const allSettledResults = [
  {
    status: "fulfilled",
    value: 11,
  },
  {
    status: "rejected",
    reason: "RRR",
  },
  {
    status: "fulfilled",
    value: 33,
  },
];
