// write a js program that prompts user for an exponent value and prints all numbers whose exponentation falls within the range of 8 and 36.

// 3

// 1^3 = 1 - No
// 2^3 = 8 - yes
// 3^3 = 27 - yes
// 4^3 = 64 - no

const prompt = require("prompt-sync")();
const expVal = Number(prompt("Enter exponent value :"));
let i = 1;
while (i <= 36) {
  let result = i ** expVal;
  if (result >= 8 && result <= 36) {
    console.log(result);
  }
  i++;
}
