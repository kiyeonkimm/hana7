const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const myFetch = (url) => fetch(url).then((res) => res.json());

const res = myFetch(sampleUrl);
console.log("🚀 ~ res:", res);
res.then(console.log);
// // myFetch를 이용하는 코드
// myFetch(sampleUrl).then((user) => {
//   console.log("user>>>", user);
// });

// fetch(sampleUrl)
//   .then((res) => {
//     console.log("🚀 ~ res:", res);
//     return res.json();
//   })
//   .then((data) => console.log("data>>", data));
