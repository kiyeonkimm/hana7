type Prop = string | number | symbol;
declare global {
    interface Array<T> {
        firstObject: T;
        lastObject: T;
        mapBy: (prop: Prop) => any[];
        filterBy: (prop: Prop, value: unknown, insInclude?: boolean) => T[];
        findBy: (prop: Prop, value: unknown) => T;
    }
}
export {};
