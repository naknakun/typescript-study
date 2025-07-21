// 함수타입 호환성
// 1. 반환값의 타입이 호환
// 2. 매개변수의 타입이 호환

// 기준1
type A = () => number;
type B = () => 10;


let a: A = () => 10;
let b: B = () => 10;

a = b;

// 기준2
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

// 매개변수의 호환성은 다운 캐스팅일때만 호환

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;