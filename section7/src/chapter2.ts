// map 메서드
const arr = [1, 2, 3];
const newArr = arr.map(x => x * 2);


function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, x => x * 2)
map(['1', '2'], x => parseInt(x));

// foreach
const arr2 = [1, 2, 3];
arr2.forEach(x => console.log(x));

function forEach<T>(arr: T[], callback: (x: T) => void) {
  for (let i = 0; i < arr.length; i ++) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], x => console.log(x.toFixed()));

forEach(['', ''], x => {x})