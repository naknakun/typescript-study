// keyof
// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: 'asd',
  age: 123
}

getPropertyKey(person, 'age');