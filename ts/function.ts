function add(a: number, b: number) {
  return a + b;
}

//const s: string = "abc";

const add2 = (a: number, b: number): number => a + b;
const add3 = (a: number, b: number) => a + b;

const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  //if (typeof height === "number") {
  if (height && height >= 0) {
    console.log(`키 : ${height + 10}`);
  }
};
introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 0); // OK
introduce("김현준", 170); // OK

//--------------------

const introduce2 = (name: string, height: number | undefined) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};

//introduce2("김현준"); // Error : Expected 2 arguments, but got 1.
introduce2("김현준2", undefined); // OK
introduce2("김현준2", 170); // OK

//-------------------
const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
};

introduce4("김현준4"); // OK
introduce4("김현준4", undefined);
introduce4("김현준4", 170);

//introduce4("김현준", "이재현");
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//-----------------

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const afactorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * afactorial(n - 1);
};

const af = (n: number): number => (n <= 1 ? n : n * af(n - 1));

let singer: (song: string) => string;

singer = function (song) {
  // song : string의 타입
  return `Singing : ${song.toUpperCase()}!`; // OK
};

//------------------
function tfn(this: { id: number }, x: string) {
  console.log("tfn>>", this.id);
}

tfn.bind({ id: 1 })("X");

const t = setTimeout(console.log, 1000, "1");

const a: number[] = [];
a[100].toFixed();

const b = [4, 5, "6"];
const c = [...a, ...b];
//const d = a.concat(b);
