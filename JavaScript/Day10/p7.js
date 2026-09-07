// w.a.p to find factorial of a number

const fact = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * fact(num - 1);
};

let result = fact(5);
console.log(result);
