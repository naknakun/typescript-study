// 기본타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


// 객체 타입간의 호환성
type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: '기린',
  color: 'yellow'
}

let dog: Dog = {
  name: 'asd',
  color: 'black',
  breed: '진돗개'
}

animal = dog;

type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: 'ㅁㄴㅇㅁㄴㅇ',
  price: 2000,
  skill: 'rgwrg'
}

book = programmingBook;

// 초과 프로퍼티 검사
let book2: Book = {
  name: '',
  price: 3000,
  // skill: 'asd'
}