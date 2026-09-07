let num = 987652;
let sum = 0;
while (num > 0) {
  let lastDigit = num % 10;
  // to seperate last digit
  sum += lastDigit;
  num = Math.floor(num / 10);
  // math.floor used to remove number after decimal point
}
console.log(sum);
