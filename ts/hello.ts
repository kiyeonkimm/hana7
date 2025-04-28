const myName: string = "Kiyeon";
let age;
age = 33;

type Name = "Hong" | "Kim" | "Lee";

type SomeType = {
  id: string | number;
  name: Name;
  age: number;
  address: string;
};

const something = ({ id, name, age, address }: SomeType) => {
  console.log(id, name, age, address);
};

const user: SomeType = { id: "1", name: "Hong", age: 33, address: "Seoul" };
something(user);

let x: string | undefined = "str";
let y: string | number = x;
let z: string;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;
type MemberGuest = Member | Guest;

let cust: Customer;
let m: Member;
let g: Guest;
let mg: MemberGuest;

cust = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
mg = cust;
