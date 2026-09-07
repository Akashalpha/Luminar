// [ id, name, Department, Salary, Experience(years), LeavesTaken, ProjectsHandled ]

employee_data = [
  [101, "Arjun", "HR", 35000, 3, 12, 5],
  [102, "Beena", "IT", 60000, 6, 8, 12],
  [103, "Cyril", "Finance", 45000, 4, 15, 6],
  [104, "Diya", "IT", 75000, 8, 5, 15],
  [105, "Faiz", "Marketing", 30000, 2, 20, 3],
  [106, "George", "Finance", 50000, 5, 10, 8],
  [107, "Helen", "IT", 80000, 10, 7, 20],
  [108, "Iqbal", "HR", 40000, 3, 18, 4],
];

// 1️⃣ Find the employee with the highest salary.
let empHtSalary = employee_data.reduce((acc, curr) =>
  acc[3] > curr[3] ? acc : curr,
);
console.log(empHtSalary);
console.log("-----------------------------------------------");


// 2️⃣ Find the employee with the lowest experience.
let empLtExperience = employee_data.reduce((acc, curr) =>
  acc[4] < curr[4] ? acc : curr,
);
console.log(empLtExperience);
console.log("-----------------------------------------------");


// 3️⃣ List all employees from the IT department.
let allEmp = employee_data.filter((empData) => empData[2] === "IT");
console.log(allEmp);
console.log("-----------------------------------------------");


// 4️⃣ Sort employees by salary descending.
let empSalDes = employee_data.toSorted((a, b) => b[3] - a[3]);
console.log(empSalDes);
console.log("-----------------------------------------------");


// 5️⃣ Check if any employee has taken more than 18 leaves.
let empMt18Leaves = employee_data.some((empData) => empData[5] > 18);
empMt18Leaves
  ? console.log("There are employees with more than 18 leaves")
  : console.log("There are no employees with more than 18 leaves");
console.log("-----------------------------------------------");


// 6️⃣  employees who have handled more than 10 projects.
let empMt10Projects = employee_data.filter((empData) => empData[6] > 10);
console.log(empMt10Projects);
console.log("-----------------------------------------------");


// 7️⃣ Find the average salary of all employees.
let avgSalary = employee_data.reduce(
  (acc, curr) => acc + curr[3] / employee_data.length,
  0,
);
console.log(avgSalary);
console.log("-----------------------------------------------");


// 8️⃣ Print details of employee named "Diya".
let diya = employee_data.find((empData) => empData[1] === "Diya");
console.log(diya);
console.log("-----------------------------------------------");


// 9️⃣ List all employees with experience greater than 5 years.
let empExpGt5Yrs = employee_data.filter((empData) => empData[4] > 5);
console.log(empExpGt5Yrs);
console.log("-----------------------------------------------");


// 🔟 Calculate the total number of projects handled by all employees together.
let totalProjects = employee_data.reduce((acc, curr) => acc + curr[6], 0);
console.log(totalProjects);
console.log("-----------------------------------------------");
