// 제네릭
function func<T>(value: T): T {
  return value;
}

let num = func<number>(10);
num.toFixed();

let bool = func(true);
let str = func('asd');


let arr = func<[number, number, number]>([1, 2, 3]);