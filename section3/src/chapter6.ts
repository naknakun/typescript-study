// 타입 단언
// a as b
// a 가 b 의 슈퍼타입
// a 가 b 의 서브타입

type Person = {
  name: string;
  age: number;
}
let person = {} as Person
person.name = '';
person.age = 1;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: 'asd',
  color: 'asd',
  breed: 'asd'
} as Dog

let num1 = 10 as never;
let num2 = 10 as unknown;

// const type assertion
let num4 = 10 as const;

let cat = {
  name: 'asd',
  color: 'asdfds'
} as const;

// non null 단언
type Post = {
  title: string;
  author?: string;
}
let post: Post = {
  title: '',
  author: 'asd'
}

const len: number = post.author!.length;