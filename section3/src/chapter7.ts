// 타입 좁히기



type Person = {
  name: string;
  age: number;
}

function func(value: number | string | Date | null | Person
)  {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toLowerCase());
  } else if (value instanceof Date) {
    console.log(value.getTime())
  } else if (value && 'age' in value) {
    console.log(value.name);
  }
}

