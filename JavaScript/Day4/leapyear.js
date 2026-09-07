// if the year is divisible by 4 and not divisible by 100 ->then it is a leap year

//                             OR

// if the year is divisible by 400 then its a leap year

// program to find if a year is a leap year

const year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not  a leap year`);
}

