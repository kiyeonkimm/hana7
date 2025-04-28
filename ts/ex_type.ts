//ex1---------------
const isStringNumber = (value: unknown): value is [string, number] => {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "string" &&
    typeof value[1] === "number"
  );
};

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

f1(["item", 1000]);

//
interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  constructor(public name: string) {}
}

function isDog(a: Animal): a is Dog {
  return "name" in a && typeof a.name == "string";
}

const maxx: Dog = { name: "Maxx" };
if (isDog(maxx)) console.log(maxx.name, "is Dog!");

const gunhee = new Retriever("Gunhee");
// gunhee.name='Gunhee';
if (isDog(gunhee)) console.log(gunhee.name, "is Dog!");

//ex2---------------
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof typeof constCart];

// 문제3) 다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정하시오. (type predicate)

interface IErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is IErrorWithMessage =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof error.message === "string";
// (error as Record<string, unknown>).message === 'string'

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

try {
  throw new Error("some error!!!!"); // 가
  throw "some string error!!!"; // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  console.log((error as Error).message); // (라)
}

// 문제4)
type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray(
  arr: TUser[] | number[],
  startOrKey: TPropertyKeyType,
  endOrValue?: unknown
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }

  if (typeof startOrKey === "string") {
    arr.filter((e) => {
      if (e && typeof e === "object") {
        // e['id'];  error
        // e[startOrKey];  error
      }
    });
  }

  if (typeof startOrKey === "symbol") {
  }

  return [];
}
