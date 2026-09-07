let numArray = [1, 2, 3, 5, 7, 8, 10, 90, 2, 12, 4565, 98];
let isEven = numArray.every((eachEl) => eachEl % 2 == 0);
// Every - checks whether all elements in an array pass a specified test implemented by a provided callback function
console.log(isEven);
