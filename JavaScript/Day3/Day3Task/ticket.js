let age = 25;
if (age < 5) {
  console.log(`For age ${age} ticket is Free`);
} else if (age >= 5 && age <= 17) {
  console.log(`For age ${age} ticket price  is ₹100 `);
} else if (age >= 18 && age <= 59) {
  console.log(`For age ${age} ticket price  is ₹200 `);
} else if (age > 60) {
  console.log(`For age ${age} ticket price  is ₹150 `);
} else {
  console.log("Invalid Input");
}
