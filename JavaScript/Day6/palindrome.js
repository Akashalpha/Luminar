// program to check whether a number is a palindrome

let num = 131;
let dupnum = num;
let temp = 0;
while (num > 0) {
  let lastDigit = num % 10;
  temp = temp * 10 + lastDigit;
  num = Math.floor(num / 10);
}
if (dupnum == temp) {
  console.log(`${temp} is a palindrome`);
} else {
  console.log(`${temp} is not  a palindrome`);
}
