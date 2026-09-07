// program to print "FIZZ" if the number is divisible by 3 , "BUZZ" if the number is divisible by 5 , "FIZZBUZZ" if the number 
// is both divisible by 3 and 5

const num = 5;
if (num % 3 == 0 && num % 5 == 0) {
  console.log("FIZZBUZZ");
} else if (num % 3 == 0) {
  console.log("FIZZ");
} else if (num % 5 == 0) {
  console.log("BUZZ");
} else {
  console.log("Invalid Input");
}
