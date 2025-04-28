declare const isStringNumber: (value: unknown) => value is [string, number];
declare const f1: (value: number | string | boolean | [string, number]) => void;
interface Animal {
}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
declare class Retriever implements Dog {
    name: string;
    constructor(name: string);
}
declare function isDog(a: Animal): a is Dog;
declare const maxx: Dog;
declare const gunhee: Retriever;
declare const cart: {
    X: number;
    Y: number;
    Z: number;
};
type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;
declare const constCart: {
    readonly X: 1;
    readonly Y: 2;
    readonly Z: 3;
};
type T3 = 1 | 2 | 3;
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof typeof constCart];
interface IErrorWithMessage {
    message: string;
}
declare const isErrorWithMessage: (error: unknown) => error is IErrorWithMessage;
declare const toErrorWithMessage: (error: unknown) => IErrorWithMessage;
type TPropertyKeyType = string | number | symbol;
type TUser = {
    [key: string]: string | number;
};
declare function deleteArray(arr: TUser[] | number[], startOrKey: TPropertyKeyType, endOrValue?: unknown): (number | TUser)[];
