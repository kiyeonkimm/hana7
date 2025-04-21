// //ex1- Loop 이용
function loopFibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
console.log("🚀 loopFibonacci:", loopFibonacci(5));

//ex2- 재귀함수 이용
function recurFibonacci(n) {
  if (n < 2) return 1;
  return recurFibonacci(n - 2) + recurFibonacci(n - 1);
}
console.log("🚀 recurFibonacci:", recurFibonacci(7));

//ex3- memoized 함수
// function memoFibonacci() {}

//
function fiboLoop(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    // let t = prev;
    // prev = curr;
    // curr = t + curr;
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

function fiboRecur(n) {
  if (n <= 1) return n;
  return fiboRecur(n - 2) + fiboRecur(n - 1);
}

const memoFibonacci = memoized(function (n) {
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});
function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

const lf3 = fiboLoop(3);
console.log("🚀 ~ loopFibonacci:", lf3);
const lf5 = fiboLoop(5);
console.log("🚀 ~ loopFibonacci:", lf5);
const lf7 = fiboLoop(7);
console.log("🚀 ~ loopFibonacci:", lf7);

const rf7 = fiboRecur(7);
console.log("🚀 ~ loopFibonacci:", rf7);
