//w.a.p to print the largets of 5 numbers and print the largest even number

function largest(num1, num2, num3) {
  if (num1 % 2 == 0 && num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest even number`);
  } else if (num2 % 2 == 0 && num2 > num3 && num2 >= num1) {
    console.log(`${num2} is the largest even number`);
  } else if (num3 % 2 == 0) {
    console.log(`${num3} is the largest even number`);
  } else {
    console.log("Not even number");
  }
}

largest(2, 4, 6);
