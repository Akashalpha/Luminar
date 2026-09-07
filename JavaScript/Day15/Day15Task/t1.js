// Count the number of spaces in a string.

let str = "mala ya lam";
let arr = str.split('')
let count = 0;
let spaces = arr.filter((eachLetter)=>eachLetter==" ") 
console.log(spaces.length);
