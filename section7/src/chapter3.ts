// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['', '']
}

interface NumberMap {
  [key: string]: number;
}

let numbermap1: NumberMap = {
  key1: 123,
  key2: 124,
}

interface Map<V> {
  [key: string]: V
}

let stringMap: Map<string> = {
  key: 'value'
}

let numberMap: Map<number> = {
  key: 123,
}

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V
}

let stringMap2: Map2<string> = {
  key: 'hello'
}

// ex1
interface Student {
  type: 'student';
  school: string
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T
}

function goToSchool(user: User<Student>) {
  console.log(user.profile.school);
}

const developerUser: User<Developer> = {
  name: '',
  profile: {
    type: 'developer',
    skill: 'c#'
  }
};

const studentUser: User<Student> = {
  name: '',
  profile: {
    type: 'student',
    school: 'asd'
  }
}