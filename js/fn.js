globalThis.name = "GlobalName";
this.name = "NoduleName";
//전역 this
function f() {
  console.log("f.this=", this.name);
}
f();

//화살표: 상의 스코프의 this
const af = () => {
  console.log("af.this=", this.name);
};
af();

const obj = {
  name: "ObjName",
  bark() {
    // good!(호출한 객체)
    console.log("bark=", this.name);
  },
  bark2: () =>
    // bad!! (this=전역/module)
    console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();

// ⇔ function declareFn(name) {
const expressFn = function (name) {
  "use strict";
  if (this && this.name) this.name = name;
  console.log(this, new.target, this.name, name);
};

const arrowFn = (name) => {
  this.name = name;
  console.log(this, this.name, name);
};

expressFn.bind({})("expfn");
arrowFn("afn");

const dfn = new expressFn("D");
console.log("🚀 ~ dfn:", Object.getPrototypeOf(dfn));
//const afn = new arrowFn('A'); // error!

console.log("==============");

const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const dog = Dog("Doggy");
const lucy = new Dog("Lucy");
//Dog.bark(); //

lucy.bark(); //
lucy.bark2(); //
console.log("type=", typeof dog); // undefined
console.log("type=", typeof lucy); // object

console.log("==============");
this.name = "Module Name";
globalThis.name = "GlobalName";
const Cat = (name) => {
  console.log(this);
  this.name = name;
  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", this.name, name);

  return this;
};

const cat = Cat("Coco");
// const cat = new Cat(''); // error!!
cat.bark(); //
cat.bark2(); //
//Cat.bark(); //
console.log("type=", typeof cat); // object

// cf. arrow function's this (p.60)

console.log("==============");

globalThis.name = "Global Name";

const objj = {
  name: "Obj Name",
  printName() {
    console.log(this.name);
  },
};

const printName = objj.printName;
// obj = null;
printName();

console.log("==============");

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };

const expressFnn = function (name) {
  console.log("efn -->", this.name, name, this instanceof expressFn);
};

const arrowFnn = (name) => {
  console.log("afn -->", this, this.name, name);
};

expressFnn.bind(hong)("expfn");
//expressFnn.call(hong)(["expfn"]);
