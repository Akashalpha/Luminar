//input      3         4          5         6
//output   36912     481216    5101520    6121824

const prompt = require("prompt-sync")()
const num = Number(prompt("Enter the number :"))
let result =""
for (let i=1;i<=4;i++) {
    result= result + (i*num)
}
console.log(result)