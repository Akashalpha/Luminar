// [ no,district,+ve cases, death rate, curred rate ,1st dose vaccine , 2nd dose vaccine ]

covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Thiruvananthapuram", 25000, 1500, 18000, 15000, 1800],
  [3, "Kozhikode", 27000, 1800, 20000, 19000, 1700],
  [4, "Thrissur", 30000, 1900, 22000, 21000, 2000],
  [5, "Kottayam", 20000, 1200, 15000, 14000, 1200],
  [6, "Kannur", 22000, 1300, 17000, 16000, 1300],
  [7, "Alappuzha", 24000, 1400, 19000, 18000, 1500],
  [8, "Pathanamthitta", 18000, 1000, 14000, 13000, 1100],
];

// Is there any district with +ve cases > 25000
let ispositiveGt25 = covid_data.some((eachData) => eachData[2] > 25000);
ispositiveGt25
  ? console.log("There is district with positive cases greaterthan 25k")
  : console.log("There is no district with positive cases greater than 25k");

// Check every district with +ve cases > 25000 or not
let districttGtthan25 = covid_data.every((eachData) => eachData[2] > 25000);
districttGtthan25
  ? console.log("Every district has positive cases greaterthan 25k ")
  : console.log("Every district doesnot have positive cases greaterthan 25k");

// // Print total number of positive cases
let totalPositive = covid_data.reduce((acc, curr) => acc + curr[2], 0);
console.log(totalPositive);

// District having Highest +ve case :
let districtHtPositive = covid_data.reduce((acc, curr) =>
  acc[2] > curr[2] ? acc : curr,
);
console.log(districtHtPositive);

// District having Highest 1st dose vaccine  :
let districtHtDose1 = covid_data.reduce((acc, curr) =>
  acc[5] > curr[5] ? acc : curr,
);
console.log(districtHtDose1);

// District having lowest death :
let districtLtDeath = covid_data.reduce((acc, curr) =>
  acc[3] < curr[3] ? acc : curr,
);
console.log(districtLtDeath);

// Sort data with +ve case in descending order :
let postiveCasesDOrder = covid_data.toSorted((a, b) => b[2] - a[2]);
console.log(postiveCasesDOrder);

// Sort data with 1st dose vaccine
let dose1VaccinrOrder = covid_data.toSorted((a, b) => b[5] - a[5]);
console.log(dose1VaccinrOrder);

// Print thrissur details
let thrissurData = covid_data[3];
console.log(thrissurData);

// Print total number of curred cases
let curedCases = covid_data.reduce((acc, curr) => acc + curr[4], 0);
console.log(curedCases);
