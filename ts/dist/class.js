"use strict";
// 값이 함수인 속성(property)을 선언하는 방식
class WithProperty {
    myProperty; // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!
const instance = new WithProperty();
instance.myProperty(); // OK?
class WithProperty2 {
    myProperty; // call signature
    constructor() {
        this.myProperty = () => {
            console.log("Hello, this is myProperty!");
        };
    }
}
const instance2 = new WithProperty2();
instance2.myProperty();
// 클래스의 인스턴스별로 새로운 함수가 생성되며, 항상 클래스 인스턴스를 가리켜야하는 화살표 함수에서 this 스코프(method)를 사용하면 클래스 인스턴스당 새로운 함수를 생성하는 시간과 메모리 비용 측면에서 유용할 수 있음
//--------------------------
class Teacher {
    sayHello() {
        console.log("Take chances, make mistakes, get messy!");
    }
} // Teacher 클래스의 이름은 teacher 변수에 주석(타입정의)을 다는데 사용됨
let teacher;
// teacher 변수에는 Teacher 클래스의 자체 인스턴스처럼 Teacher 클래스에 할당할 수 있은 값만 할당해야함을 타입스크립트에 알려줌
teacher = new Teacher(); // OK
teacher.sayHello(); // OK
//teacher = 'Hello';       // Error : Type 'string' is not assignable to type 'Teacher'.
//teacher = {};            // Error
teacher = { sayHello: () => { } }; // Error
teacher = {
    sayHello() { },
}; // Is this OK?? (:구조적 타입 체킹 - 구조만 같으면 통과! Exact-matching은 freshness 체크 X)
//--------------
class Lesson {
    subject;
    constructor(subject) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    url;
    constructor(subject, url) {
        super(subject);
        this.url = url;
        this.subject = "";
    }
}
//-------------------
class Fish {
    name;
    mouse;
    //name: string;
    constructor(name, mouse = "x") {
        this.name = name;
        this.mouse = mouse;
        this.name = "x";
    }
}
//----------------------
const isString = (value) => typeof value === "string";
const f11 = (value) => {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
};
