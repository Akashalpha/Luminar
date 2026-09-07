// program to find a number is krishnamurthy number using while

let num = 145;
let sum = 0;
let dupnum = num;
while (num > 0) {
  let lastDigit = num % 10;
  let fact = 1;
  while (lastDigit > 0) {
    fact *= lastDigit;
    lastDigit--;
  }
  sum += fact;
  num = Math.floor(num / 10);
}
dupnum == sum
  ? console.log("krishnamurthy number")
  : console.log("Not a Krishnamurthy number");
console.log(sum);
