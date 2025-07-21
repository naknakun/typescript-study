// 인터페이스의 확장

interface Animal {
  name: string;
  age: number;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface DogCat extends Dog, Cat {}

let dogcat: DogCat = {
  name: '',
  age: 1,
  isScratch: true,
  isBark: true
}