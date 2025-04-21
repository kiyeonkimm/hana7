// var zz;
// console.log(zz);
// zz = 9;
// console.log("🚀 ~ zz:", zz);
// console.log(globalThis["zz"]);

// var zz;
// console.log("this", this);
// console.log(globalThis);
// console.log(a); // undefined
// var a = "A";

let i = 1;
console.log("x=", x);
var x = 1;
console.log(ff, f);
f(); // error
{
  f();
  var x = 2;
  function f() {
    console.log("f>", x, xx);
  }
  const b = 1;
}
function ff() {
  console.log("ff>", y, yy);
}
if (x >= 2) {
  var y = 5;
  let yy = 55;
}
var xx = 100;
ff();
