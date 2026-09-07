// const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14]
// Find the first number that leaves a remainder of 1 when divided by 3

let a1 = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
let result = a1.find((eachEl) => eachEl % 3 == 1);
console.log(result);
