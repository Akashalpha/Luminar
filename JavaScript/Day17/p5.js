const employeeAttendance = [
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Absent" },
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Present" },
  { employee: "Steve", status: "Present" },
  { employee: "Steve", status: "Absent" },
  { employee: "Mary", status: "Present" },
  { employee: "John", status: "Absent" },
];

// Question: Print how many days each employee was "Present".
let result = {};
employeeAttendance.forEach((eachObj) => {
  let employeeName = eachObj.employee;
  let currStatus = eachObj.status;
  if (currStatus == "Present") {
    if (employeeName in result) {
      result[employeeName] += 1;
    }
  else {
    result[employeeName] = 1;
  }
}
});
console.log(result);
