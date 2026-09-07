let a1 = [1, 2, 3, 4, 56, 7, 0, 12, 24, 36];
let largest = a1.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(largest);

let a2 = [1, 2, 3, 4, 56, 7, 12, 24, 36];
let smallest = a2.reduce((acc, curr) => (acc < curr ? acc : curr));
console.log(smallest);
