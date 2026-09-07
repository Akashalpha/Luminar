const employees = [
  [1000, "John Mathew", "Developer", "Kochi", 600000, 2],
  [1001, "Rahul Das", "QA Tester", "Kochi", 500000, 2],
  [1002, "Sneha Raj", "Automation Tester", "Tvm", 550000, 3],
  [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
  [1004, "Alan George", "Developer", "Kochi", 80000, 4],
  [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
  [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
  [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
  [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
  [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3],
];

// 1. print all employee name
let allEmp = employees.map((empData) => empData[1]);
console.log(allEmp);
console.log(`-----------------------------`);


// 2. print total number of employee
let totalEmp = employees.length;
console.log(totalEmp);
console.log(`-----------------------------`);


// 3. print developer employee details
let devEmp = employees.filter((empData) => empData[2] === "Developer");
console.log(devEmp);
console.log(`-----------------------------`);


// 4. print employees whose salary > 75000
let salaryGt75000 = employees.filter((empData) => empData[4] > 75000);
console.log(salaryGt75000);
console.log(`-----------------------------`);


// 5. print details of employee Vivek pp
let vivek = employees.find((empData) => empData[1] === "Vivek pp");
console.log(vivek);
console.log(`-----------------------------`);


// 6. Sort employee based on their salary in descending order
let empSalaryDes = employees.toSorted((a, b) => b[4] - a[4]);
console.log(empSalaryDes);
console.log(`-----------------------------`);


// 7. Sort employee based on their experience in ascending order
let empExpASc = employees.toSorted((a, b) => a[5] - b[5]);
console.log(empExpASc);
console.log(`-----------------------------`);


// 8. print total salary of all employees
let totalSalary = employees.reduce((acc, curr) => acc + curr[4], 0);
console.log(totalSalary);
