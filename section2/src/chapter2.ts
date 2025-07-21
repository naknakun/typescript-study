// 배열
let numArr:number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'im'];

let boolArr: Array<boolean> = [true];

let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [2, 3, 4]
]

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
tup1 = [1, 2]

let tup2: [number, string, boolean] = [1, "", true];

const users: [string, number][] = [
  ['aa', 1],
  ['bb', 2],
]