// first element will be in 0th index
// total number of elements = arrayName.length
// last element will be in length-1 index

// to add a new element to the last index -> push('value')
// to remove an element from last index -> pop()

// to add a new element to the first index -> unshoft('value')

// to remove an element to the first index -> shift

let days = ["Monday", "Tuesday", "Wednesday"];

console.log(days[2]);
console.log(days.length);
let length = days.length;
console.log(days[length - 1]);
days.push("Thursday");
console.log(days);
days.unshift("Sunday");
console.log(days);
days.pop(days);
console.log(days);
days.shift(days);
console.log(days);
