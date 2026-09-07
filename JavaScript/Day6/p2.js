// Print all numbers between 1 and 100 that are divisible by 5.

let i = 1;
while (i <= 100) {
  if (i % 5 == 0) {
    console.log(i);
  }
  // i%5==0 && console.log(i);
  i++;
}
