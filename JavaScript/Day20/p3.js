// 1. name , marks in phy , chem , bio, maths, computer science
// methods: -
// printName
// print total mark
// print average

class student {
  name = "athul";
  phy = 20;
  che = 20;
  bio = 30;
  maths = 26;
  cs = 29;

  printName() {
    console.log(this.name);
  }
  printTotal() {
    let total = this.phy + this.che + this.bio + this.maths + this.cs;
    console.log(total);
  }
  printAverage() {
    let total = this.phy + this.che + this.bio + this.maths + this.cs;
    console.log(total / 5);
  }
}
let obj1 = new student();
obj1.printName();
obj1.printTotal();
obj1.printAverage();
