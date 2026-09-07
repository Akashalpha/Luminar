// input 15
// output  15+14+13+....+1

const rec = (num) => {
  if (num == 1) {
    return 1;
  }
  return num + rec(num - 1);
};

let result = rec(5);
console.log(result);
