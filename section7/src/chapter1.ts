// ex1
function swap<T, U>(a: U, b: T) {
  return [b, a]
}

const [a, b] = swap('asd', 2)


// ex2
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, 'rge', 'sdc']);

// ex3
function getLength<T extends {length: number}>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({length: 1});

// let var4 = getLength(12);