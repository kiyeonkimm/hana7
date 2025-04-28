function tuple() {
  const a: [number, string, boolean] = [1, "lim", false];

  let b: [number, string] = [a[0], a[1]];
  console.log("🚀 b:", b);
}
tuple();

const greeting = (greet: "Hi" | "Hello", name: string, age: number) => {
  console.log(`${greet}~!    
                    ${name}, You are ${age}.`);
};

greeting("Hi", "Hong", 33);
const tup: [string, number] = ["Kim", 55];
greeting("Hello", ...tup);
const arr = ["Park", 44];
//greeting("Hi", arr[1]);

//----------------
const arrr = [1, 2, 3];
const arr1 = [4, 5, 6] as const;

type T1 = [string, number];
type AT2 = [number, T1]; //[number,string,number];

export {};
