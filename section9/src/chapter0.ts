// 조건부 타입
type A = number extends string ? string : number;

type objA = {
  a: number;
}

type objB = {
  a: number;
  b: number;
}

type B = objB extends objA ? number : string;


// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let asd: StringNumberSwitch<number>;
let dsa: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  return text.replaceAll(' ', '') as any;
}

let result = removeSpaces('asd asd asd');