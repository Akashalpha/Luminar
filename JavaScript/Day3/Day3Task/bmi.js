const bmi = "abcd";
if (bmi < 18.5) {
  console.log(`BMI ${bmi} means Body is Underweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`BMI ${bmi} means Body has Normal weight`);
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(`BMI ${bmi} means Body is Overweight`);
} else if (bmi >= 30) {
  console.log(` BMI ${bmi} means Body is Obese`);
} else {
  console.log("Invalid Input");
}
