declare const myName: string;
declare let age: any;
type Name = "Hong" | "Kim" | "Lee";
type SomeType = {
    id: string | number;
    name: Name;
    age: number;
    address: string;
};
declare const something: ({ id, name, age, address }: SomeType) => void;
declare const user: SomeType;
declare let x: string | undefined;
declare let y: string | number;
declare let z: string;
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
declare let cust: Customer;
declare let m: Member;
declare let g: Guest;
declare let mg: MemberGuest;
