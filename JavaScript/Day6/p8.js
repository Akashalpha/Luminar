// program to reverse a number

let num = 1234506;
let temp = 0;
//  temp =""
while (num > 0) {
  let lastDigit = num % 10;
  // temp+=lastDigit
  temp = temp * 10 + lastDigit;
  num = Math.floor(num / 10);
}
console.log(temp);
