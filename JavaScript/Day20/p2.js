// create a class with properties name and year of birth
// create a method that prints name and age

class person {
  constructor(name, YOB) {
    this.name = name;
    this.YOB = YOB;
  }
  printAge() {
    console.log(this.name, 2026 - this.YOB);
  }
}

let obj1 = new person("Sam", 1977);
obj1.printAge();
