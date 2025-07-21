// void
function func1(): string {
  return 'hello'
}

function func2(): void {
  console.log('asd')
}

let a: void;
a = undefined;

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}