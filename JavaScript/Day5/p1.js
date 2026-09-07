const age = 20;
let isMember = true;
if (age >= 18) {
  if (isMember) {
    console.log("Eligible with member discount");
  } else {
    console.log("Eligible without discount");
  }
} else {
  console.log("Not Eligible");
}
