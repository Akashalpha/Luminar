class person {
  // properties/data
  constructor(name, age, email) {
    ((this.name = name), (this.age = age), (this.email = email));
  }

  // methods
  printDetails() {
    console.log(this.name, this.age, this.email);
  }
}

let obj1 = new person("Nithin", 60, "nithin@gmail.com");
obj1.printDetails();

let obj2 = new person("qwert", 40, "qwert@gmail.com");
obj2.printDetails();
