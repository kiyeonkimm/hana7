interface IUser {
  id: number;
  age: number;
  name: string;
}
interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type BN<T, U> = T extends keyof U ? boolean : number;
type IdBN1 = BN<"id", IDept>; // boolean
type IdBN2 = BN<"idd", IDept>; // number

type TX<T, U> = T extends keyof U ? T : U;
type TXID1 = TX<"id", IDept>; // "id"
type TXID2 = TX<"idd", IDept>; // IDept

type Except<T, U> = T extends U ? never : T; // never는 씹힌다!(같으면 제외)
type Ex0 = Except<IUser, IDept>; // IUser
type Ex1 = Except<keyof IUser, keyof IDept>; // name
type Ex2 = Except<keyof IDept, keyof IUser>; // dname | captain

type Intersect<T, U> = T extends U ? T : never; // never는 씹힌다!(같으것만!)
type Ext1 = Intersect<keyof IUser, keyof IDept>; // id | age
type Ext2 = Intersect<keyof IDept, keyof IUser>; // id | age

//---------------------

type ValueOf<T> = T[keyof T];

export {};
