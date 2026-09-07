// w.a.p that accepts celsius value to and return its farenheit value

const temp = (value) => {
  let faren = value * 1.8 + 32;
  return faren;
};
let result = temp(100);
console.log(result);
