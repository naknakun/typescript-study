// class



let studentA = {
  name: 'asd',
  grade: 'a',
  age: 2,

}

class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  
  study() {
    console.log('asd', this.name);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log('asd', this.favoriteSkill);
  }
}

let aasd = new Student('fwe', 'asd', 1)
aasd.study();

let studentDeveloper = new StudentDeveloper('asd', 'asd', 1, 'asd');
studentDeveloper.study();
studentDeveloper.programming();