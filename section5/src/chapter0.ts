interface a {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

let c: a = {
  name: 'asd',
  sayHi: () => {
    console.log('hello');
  }
}

interface b extends a {
  color: string
}
