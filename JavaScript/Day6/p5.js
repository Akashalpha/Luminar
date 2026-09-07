// Find the sum of all odd numbers from 1 to 50

let i = 0;
let limit = 50;
let sum = 0;
while (i <= limit) {
  if (i % 2 != 0) {
    sum += i;
  }
  i++;
}
console.log(sum);
