declare function add(a: number, b: number): number;
declare const add2: (a: number, b: number) => number;
declare const add3: (a: number, b: number) => number;
declare const introduce: (name: string, height?: number) => void;
declare const introduce2: (name: string, height: number | undefined) => void;
declare const introduce4: (name: string, height?: number) => void;
declare function factorial(n: number): number;
declare const afactorial: (n: number) => number;
declare const af: (n: number) => number;
declare let singer: (song: string) => string;
declare function tfn(this: {
    id: number;
}, x: string): void;
declare const t: NodeJS.Timeout;
declare const a: number[];
declare const b: (string | number)[];
declare const c: (string | number)[];
