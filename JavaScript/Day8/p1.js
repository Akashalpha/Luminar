const prompt = require('prompt-sync') ()
let name = prompt("Enter your name :")
console.log(name,typeof(name))



let num1 = prompt("Enter number 1 :")
num1=Number(num1)
console.log(num1,typeof(num1))

let num2=prompt("Enter number 2 :")
num2=Number(num2)
console.log(num2,typeof(num2))

console.log(num1+num2)