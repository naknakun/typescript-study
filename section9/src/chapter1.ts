// 분산적인 조건부 타입

type StringNumberSwitch<T> = [T] extends [number] ? string : number;
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

// ex
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;


type Exctract<T, U> = T extends U ? string : never;
type B = Extract<number | string | boolean, string>;