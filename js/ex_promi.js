//다음 코드를 Promise를 이용하여 refactoring 하시오.

// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

// console.log("START!", new Date());

const depthTimer = (sec) => {
  console.log("depthTimer>>", sec);
  return new Promise((resolve) => setTimeout(resolve, sec * 1000), sec + 1);
};

depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((arr) => console.error("Error>>", err));

// function depthTimer(depth) {
//   const delays = [1000, 2000, 3000];
//   return new Promise((resolve, reject) => {
//     if (depth > 3) return reject(new Error("Too deep!"));

//     setTimeout(() => {
//       console.log(`depth${depth}`, new Date());

//       if (depth === 3) {
//         reject(new Error("Already 3-depth!!"));
//       } else {
//         resolve(depth + 1);
//       }
//     }, delays[depth - 1]);
//   });
// }
