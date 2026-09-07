// Create a recursive function to print numbers from 10 to 1.


function reverse(num) {
  if (num < 1) {
    return;
  }
  console.log(num);
  reverse(num - 1);
}
reverse(10);
