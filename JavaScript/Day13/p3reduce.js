// let a1=[1,2,3,4,56,7,0,12,24,36]
// let sum= a1.reduce((acc,curr)=>acc+curr)
// console.log(sum)

let a1 = [1, 2, 3, 4, 56, 7, 0, 12, 24, 36];
let sum = a1.reduce((acc, curr) => acc + curr, 100);
console.log(sum);

// at first the accumulator will be 0th index and current value will be 1st index , after operation the result will be stored in accumulator and current value be shifted to next index and then they perform operations
// we can also provide value for acccumulator
