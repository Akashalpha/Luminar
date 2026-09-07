console.log("first");
setTimeout(() => {
  console.log("second");
}, 3000);
setTimeout(() => {
  console.log("third");
}, 6000);

// call back funtions are function passed into another function as an argument

// Higher order functions are functions that accepts another function as its argument

// setTimeout=>Higher order function
// ()=>{}is the callback funtion
