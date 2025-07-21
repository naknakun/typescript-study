// 대수 타입 - 합집합, 교집합
// 합집합
let a: string | number;
a = 'wfe';
a = 1;

let arr: (number | string | boolean)[] = []

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
  name: '',
  color: ''
}

let union2: Union1 = {
  name: '',
  language: ''
}

let union3: Union1 = {
  name: '',
  color: '',
  language: ''
}

// 교집합
let variable: Dog & Person;
variable = {
  name: '',
  color: '',
  language: ''
}