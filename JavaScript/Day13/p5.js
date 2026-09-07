// Given an array of numbers , create a new array containing the square of all even numbers

// let a1=[1,2,3,4,5,6]
// for(let i=0;i<a1.length;i++){
//     a1[i]%2==0&&console.log(a1[i]**2)
// }

let a1 = [1, 2, 3, 4, 5, 6];
let evenArray = a1.filter((eachEl) => eachEl % 2 == 0);
let sqArray = evenArray.map((eachEl) => eachEl ** 2);
console.log(sqArray);
