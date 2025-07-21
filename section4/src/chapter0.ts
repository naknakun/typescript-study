function func(a: number, b: number) {
  return a + b;
}

let adda = (a: number, b: number) => a + b;

function introduce(name = 'asd', tall?: number) {
  console.log(name);
  if (typeof tall === 'number') {
    console.log(tall + 1);
  }
}

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach(x => sum += x);
  return sum;
}

getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)