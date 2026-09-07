// Program to find the poduct of digits of a number
let num = 1234;
let product = 1;
while (num > 0) {
  let lastDigit = num % 10;
  product *= lastDigit;
  num = Math.floor(num / 10);
}
console.log(product);
