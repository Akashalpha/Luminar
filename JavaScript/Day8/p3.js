// input    2    3      4      5
// output   24   69    4936   61725

//logic    2*12 3*123 4*1234 5*12345

const prompt = require("prompt-sync")();
const input = Number(prompt("Enter the number :"));
let i = 1;
let num = 0

while (i<= input) {
   num = num*10 + i;
   i++;
}
console.log(num*input);

