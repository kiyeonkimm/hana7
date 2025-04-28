type IS = {
    [k: number]: number;
    [k: symbol]: boolean;
    [k: string]: string | number;
};
declare const sym1: unique symbol;
declare let isobj1: IS;
declare let isobj2: IS;
