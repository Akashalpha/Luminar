let a1 = [1, 2, 3, 4, 5, 6, 67, 8, 90, 10];
let result = a1.filter((eachEl) => eachEl % 2 == 0);
// returns the elements of an array that meet the conditions specified in a callback funtion
console.log(result);
console.log("---------------------");

let result1 = a1.find((eachEl) => eachEl % 2 == 0);
// returns only the first element of an array that meet the conditions specified in a callback funtion
console.log(result1);
