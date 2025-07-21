// Exclude<T, U>
// 제외

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>


// Extract<T, U>
// T에서 U 에서 추출
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// ReturnType
// 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
  return 'asd'
}

function funcB() {
  return 10;
}

type ResturnA = ReturnType<typeof funcA>
type ResturnB = ReturnType<typeof funcB>