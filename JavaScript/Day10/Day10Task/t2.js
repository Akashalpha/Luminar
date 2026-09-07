// Create an arrow function to check whether a number is positive, negative, or zero.

const check = (num) => {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else if (num == 0) {
    return "Zero";
  } else {
    return "Invalid";
  }
};
let result = check(3);
console.log(result);
