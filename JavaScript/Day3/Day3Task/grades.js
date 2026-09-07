let mark = 75;
if (mark >= 90 && mark <= 100) {
  console.log(`${mark} is Grade A`);
} else if (mark >= 80 && mark <= 89) {
  console.log(`${mark} is Grade B`);
} else if (mark >= 70 && mark <= 79) {
  console.log(`${mark} is Grade C`);
} else if (mark >= 60 && mark <= 69) {
  console.log(`${mark} is Grade D`);
} else if (mark < 60) {
  console.log(`${mark} is Fail`);
} else {
  console.log("Invalid Input");
}
