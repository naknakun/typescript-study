// 타입스크립트의 클래스
const employee = {
  name: 'asd',
  age: 25,
  position: 'erg',
  work() {
    console.log('asdasd');
  }
}

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('asdasd');
  }
}

const employeeB = new Employee('', 1, '');
const employeeC: Employee = {
  name: '',
  age: 1,
  position: '',
  work() {
      
  },
}

class ExcutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}