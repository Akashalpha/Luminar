// w.a.p to find multiples of 5 from an array and add those elements into a new array

let a1 = [2, 3, 5, 10, 15, 20, 25];
let result = [];
let length = a1.length;
for (let i = 0; i < length; i++) {
  a1[i] % 5 == 0 && result.push(a1[i]);
}
console.log(result);
