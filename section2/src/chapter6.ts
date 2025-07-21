// any
let anyVar: any = 10;
anyVar = 'fwe';

anyVar = () => {}

anyVar.toFixed();

let num: number = 10;
num = anyVar;


// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 123;
unknownVar = () => {}

if (typeof unknownVar === 'number') {
  num = unknownVar;
}