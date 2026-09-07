let a1 = [1, 2, 5, 3, 7, 11, 13];
a1.sort((a, b) => a - b);
console.log(a1);
a1.sort((a, b) => b - a);
console.log(a1);
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");

let sortedArray = a1.toSorted((a, b) => a - b);
console.log(a1);
console.log(sortedArray);
