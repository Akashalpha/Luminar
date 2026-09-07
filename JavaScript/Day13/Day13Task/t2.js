const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80
let scoredAbove80 = students.filter((stdData) => stdData[3] > 80);
console.log(scoredAbove80);
console.log("--------------------------------------------");


// Print all students in BCA course
let studentsInBCA = students.filter((stdData) => stdData[2] === "BCA");
console.log(studentsInBCA);
console.log("--------------------------------------------");


// Print all students from Kochi
let studentsFrKochi = students.filter((stdData) => stdData[4] === "Kochi");
console.log(studentsFrKochi);
console.log("--------------------------------------------");


// Create a new array with only names and marks
let newArray = students.map((eachEl) => [eachEl[1], eachEl[3]]);
console.log(newArray);
console.log("--------------------------------------------");


// Print total marks of all students
let totalMarks = students.reduce((acc, curr) => acc + curr[3], 0);
console.log(totalMarks);
console.log("--------------------------------------------");


// Print average mark of students
let averageMarks = students.reduce(
  (acc, curr) => acc + curr[3] / students.length,
  0,
);
console.log(averageMarks);
console.log("--------------------------------------------");


//  Sort students by marks in descending order
let marksInDes = students.toSorted((a, b) => b[3] - a[3]);
console.log(marksInDes);
console.log("--------------------------------------------");


// Find the highest scoring student
let studentHtScore = students.reduce((acc, curr) =>
  acc[3] > curr[3] ? acc : curr,
);
console.log(studentHtScore);
console.log("--------------------------------------------");


//  Print students who scored less than 70
let scoreLt70 = students.filter((eachEl) => eachEl[3] < 70);
console.log(scoreLt70);
