const companyData = [
  {
    id: 1,
    name: "TechNova",
    location: "Kochi",

    employees: [
      {
        id: 101,
        name: "Arun",
        age: 25,
        department: "Development",
        salary: 45000,

        skills: ["JavaScript", "React", "Node.js"],

        projects: [
          {
            name: "E-Commerce",
            status: "Completed",
            technologies: ["React", "Node.js", "MongoDB"],
          },
          {
            name: "Food Delivery",
            status: "Ongoing",
            technologies: ["Angular", "Express", "MongoDB"],
          },
        ],
      },

      {
        id: 102,
        name: "Meera",
        age: 28,
        department: "Design",
        salary: 40000,

        skills: ["Figma", "Photoshop", "UI/UX"],

        projects: [
          {
            name: "Banking App",
            status: "Completed",
            technologies: ["Figma", "Adobe XD"],
          },
        ],
      },

      {
        id: 103,
        name: "Rahul",
        age: 24,
        department: "Development",
        salary: 50000,

        skills: ["JavaScript", "React", "TypeScript"],

        projects: [
          {
            name: "Banking App",
            status: "Ongoing",
            technologies: ["React", "TypeScript"],
          },
          {
            name: "Admin Dashboard",
            status: "Completed",
            technologies: ["React", "Tailwind"],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "CodeCraft",
    location: "Bangalore",

    employees: [
      {
        id: 201,
        name: "Anjali",
        age: 26,
        department: "Development",
        salary: 55000,

        skills: ["Python", "Django", "MongoDB"],

        projects: [
          {
            name: "Hospital Management",
            status: "Completed",
            technologies: ["Python", "Django", "MongoDB"],
          },
        ],
      },

      {
        id: 202,
        name: "Vishnu",
        age: 30,
        department: "Testing",
        salary: 42000,

        skills: ["Selenium", "Cypress", "Java"],

        projects: [
          {
            name: "E-Commerce",
            status: "Ongoing",
            technologies: ["Selenium", "Java"],
          },
          {
            name: "Banking App",
            status: "Completed",
            technologies: ["Cypress", "JavaScript"],
          },
        ],
      },

      {
        id: 203,
        name: "Sneha",
        age: 27,
        department: "HR",
        salary: 38000,

        skills: ["Communication", "Recruitment"],

        projects: [],
      },
    ],
  },

  {
    id: 3,
    name: "WebWorks",
    location: "Chennai",

    employees: [
      {
        id: 301,
        name: "Akhil",
        age: 23,
        department: "Development",
        salary: 47000,

        skills: ["JavaScript", "Vue", "Node.js"],

        projects: [
          {
            name: "Social Media",
            status: "Ongoing",
            technologies: ["Vue", "Node.js", "MongoDB"],
          },
        ],
      },

      {
        id: 302,
        name: "Devika",
        age: 29,
        department: "Design",
        salary: 44000,

        skills: ["Figma", "Illustrator", "UI/UX"],

        projects: [
          {
            name: "Social Media",
            status: "Completed",
            technologies: ["Figma", "Illustrator"],
          },
          {
            name: "Portfolio Builder",
            status: "Ongoing",
            technologies: ["Figma", "Photoshop"],
          },
        ],
      },
    ],
  },
];

// Print all employee names from all companies.

let allEmployes = companyData
  .map((eachData) => eachData.employees)
  .flat(Infinity);
let flattendArray = allEmployes.map((eachData) => eachData.name);
console.log(flattendArray);
console.log("-----------------------");

// Find the employee with the highest salary.
let highestSalary = allEmployes.reduce((acc, curr) =>
  acc.salary > curr.salary ? acc : curr,
);
console.log(highestSalary);
console.log("-----------------------");

// Print employees who have more than 2 skills.

let moreThan2 = allEmployes.filter((eachData) => eachData.skills.length > 2);
console.log(moreThan2);
console.log("-----------------------");

// Print all project names from all companies.

let allProject = allEmployes
  .map((eachData) => eachData.projects)
  .flat(Infinity);
let projectNames = allProject.map((eachData) => eachData.name);
console.log(projectNames);
console.log("-----------------------");

// Print employees who have at least one ongoing project.

let projectStatus =allEmployes.filter(
  (eachEmp) => eachEmp.projects.some((eachProject)=>eachProject.status == "Ongoing",
));
console.log(projectStatus);
console.log("-----------------------");

// Calculate the total salary expense for each company.

companyData.forEach((eachData) => {
  let companyName = eachData.name;
  let employees = eachData.employees;

  let totalSalary = employees.reduce((acc, curr) => acc + curr["salary"], 0);
  console.log(companyName, totalSalary);
});
console.log("-----------------------");

// Find the company with the highest number of employees.


// Find the most commonly used technology across all projects.



let allTech = allProject.map((eachProject) => eachProject.technologies).flat(Infinity);

let count = {};

allTech.forEach((eachTech) => {
  if (eachTech in count) {
    count[eachTech] += 1;
  } else {
    count[eachTech] = 1;
  }
});

let countArray =Object.entries(count)
let highestTech = countArray.reduce((acc,curr)=>acc[1]>curr[1]?acc:curr)
console.log(highestTech)
console.log("-----------------------");


// Print employees who have both "JavaScript" and "React" as skills.

let bothJSAndReact =allEmployes.filter(
  (eachEmp)=>eachEmp.skills.includes("JavaScript")&&
  eachEmp.skills.includes("React")
)
console.log(bothJSAndReact)


// Find employees who have no projects.
