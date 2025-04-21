const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log("🚀  idxId2:", idxId2);

// Try this: id를 부여해서 실행하는 findId 함수를 작성하시오.
const findId = (pid) => (a) => a.id == pid;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

Array.prototype.map = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = f(this[i], i, this);
  }
  return results;
};

const ids = users.map((a) => a.id);
console.log("🚀 ~ ids:", ids);

Array.prototype.mapBy = function (k) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(this[i][k]);
  }
};

const ids2 = users.mapBy("id");
console.log("🚀 ~ ids2:", ids2);

const name = users.mapBy("id");
console.log("🚀 ~ name:", name);

// 다음을 수행하시오.
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const d1 = arr2.slice(1, 3);
console.log("🚀 d1:", d1);

// ex2) [3]부터 모두 다 추출
const d2 = arr2.slice(2);
console.log("🚀 d2:", d2);

// ex3) [2,3,4] 제거하기
const d3 = arr2.splice(1, 3);
console.log("🚀 d3:", d3);
console.log("🚀 d3:", arr2);

// ex4) 복원하기
const d4 = arr2.splice(1, 0, 2, 3, 4);
console.log("🚀 d4:", d4);

// ex5) [3] 부터 끝까지 제거하기
const d5 = arr2.splice(2);
console.log("🚀 d5:", d5);
console.log("🚀 d5:", arr2);

// ex6) 복원하기
const d6 = arr2.splice(2, 0, ...d5);
console.log("🚀 d6:", arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가

arr2.splice(2, Infinity, "X", "Y", "Z", 4, 5);
console.log("7-1 ==>", arr2);

arr2.splice(2, 3, 3);
arr2.splice(2, 1, "X", "Y", "Z");
console.log("7-2 ==>", arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const a8 = [...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(-2)];
console.log("🚀 a8:", a8);
//asserts.deepStrictEqual(a8, [1, 2, "X", "Y", "Z", 4, 5]);
