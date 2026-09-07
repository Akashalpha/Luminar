// from the numbers 1 to 100 , program to print "FIZZ - number" if the number is divisible by 3 , "BUZZ - number" if the number is divisible by 5 , "FIZZBUZZ - number" if the number is divisible by both 3 and 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FIZZBUZZ - ${i}`);
  } else if (i % 3 == 0) {
    console.log(`FIZZ - ${i}`);
  } else if (i % 5 == 0) {
    console.log(`BUZZ - ${i}`);
  }
}
