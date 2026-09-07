// Currying function
// is a technique of changing a function with multiple arguments into multiple function with single argument

// // Is a programming technique which changes a function with multiple argumnets into a sequence of nested functions each taking a single argument

const add = (num1) => {
  return (num2) => {
    return (num3) => {
      return (num4) => {
        console.log(num1 + num2 + num3 + num4);
      };
    };
  };
};

add(2)(4)(6)(8);

// closure is a feature in JS where an inner funtion retains access to the variables of their outer function
