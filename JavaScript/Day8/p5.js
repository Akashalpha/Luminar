// input       5           6            7           8
// output    51025       61236        71449       81664


const prompt = require("prompt-sync")()
const num = Number(prompt("Enter the number :"))
console.log(`${num}${num*2}${num**2}`)






              // OR

// const prompt = require("prompt-sync")()
// const num = Number(prompt("Enter the number :"))
// let result = ""
// for(let i=1;i<=4;i++){
//     result = num+String(num*2)+num**2
// }console.log(result)