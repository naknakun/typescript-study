// unknown

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  let num1: number= 1;

  let num: unknown = num1;
}

// never 타입
function neverExam() {
  function neverFunc(): never {
    while(true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log('hello')
    return undefined;
  }

  let anyVar: any = voidFunc();

  let voidVar: void = undefined;
}

// any
function anyExam() {
  let num: number = 1;
  let anyVar: any = 'num';
  let unknownVar: unknown = 123;
  let neverVar: never;

  

  num = anyVar;
}