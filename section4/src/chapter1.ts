// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: (a: number, b: number) => number = (a, b) => a - b;

// 호출 시그니처
type Operation2 = {
  (a: number, b: number): number;
  name: string;
}

const add2: Operation2 = (a, b) => a + b;