// 접근 제어자

class Employee {
  constructor(private name: string, protected age: number, public position: string) {}

  work() {
    console.log('asdasd');
  }
}

class ExcutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  asd() {
    this.age;
  }
}

const employee = new Employee('asd', 1, '123');