let numArray = [1, 2, 3, 5, 7, 8, 10, 90, 2, 12, 4565, 98];
let isEven = numArray.some((eachEl) => eachEl % 2 == 0);
// some - checks whether atleast one element in an array passes a test implemented provided by a call back function
console.log(isEven);
