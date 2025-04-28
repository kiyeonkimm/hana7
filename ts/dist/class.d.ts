declare class WithProperty {
    myProperty: () => void;
}
declare const instance: WithProperty;
declare class WithProperty2 {
    myProperty: () => void;
    constructor();
}
declare const instance2: WithProperty2;
declare class Teacher {
    sayHello(): void;
}
declare let teacher: Teacher;
declare class Lesson {
    subject: string;
    constructor(subject: string);
}
declare class OnlineLesson extends Lesson {
    url: string;
    constructor(subject: string, url: string);
}
declare class Fish {
    name: string;
    mouse: string;
    constructor(name: string, mouse?: string);
}
declare const isString: (value: unknown) => value is string;
declare const f11: (value: number | string | boolean | [string, number]) => void;
