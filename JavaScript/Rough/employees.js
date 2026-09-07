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
let allEmployee = companyData.map((eachEmployee)=>eachEmployee.employees).flat(Infinity)
allEmployee.forEach((eachData)=>
console.log(eachData.name))


// Find the employee with the highest salary.
let highSal = allEmployee.reduce((acc,curr)=>acc['salary']>curr['salary']?acc:curr)
console.log(highSal)


// Print employees who have more than 2 skills.
let Mt2Skill = allEmployee.filter((eachData)=>eachData.skills.length>2)
console.log(Mt2Skill)


// Print all project names from all companies.
let allProject = allEmployee.map((eachProject)=>eachProject.projects).flat(Infinity)
allProject.forEach((eachData)=>
console.log(eachData.name))


// Print employees who have at least one ongoing project.
let ongoing = allEmployee.filter((eachData)=>eachData.projects.some((eachPro)=>eachPro.status=="Ongoing"))
console.log(ongoing)


// Calculate the total salary expense for each company.
companyData.forEach((eachData)=>{
    let companyName = eachData.name
    let employee = eachData.employees
    let totalSal = employee.reduce((acc,curr)=>acc+curr['salary'],0)
    console.log(companyName,totalSal)
})


// Find the company with the highest number of employees.
 let highestNumberEmployees = companyData.reduce((acc,curr)=>acc.employees.length>curr.employees.length?acc:curr)
  console.log(highestNumberEmployees.name , highestNumberEmployees.employees.length )


// Find the most commonly used technology across all projects.
let allTech =allProject.map((eachTechnology)=>eachTechnology.technologies).flat(Infinity)
let count={}
allTech.forEach((eachTech)=>{
  if(eachTech in count){
    count[eachTech]+=1
  }else{
    count[eachTech]=1
  }
})
console.log(count)
let countArray = Object.entries(count)
let commonTech = countArray.reduce((acc,curr)=>acc[1]>curr[1]?acc:curr)
console.log(commonTech)


// Print employees who have both "JavaScript" and "React" as skills.
let bothJAndR=allEmployee.filter((eachData)=>eachData.skills.includes("JavaScript")&&eachData.skills.includes("React"))
console.log(bothJAndR)


// Find employees who have no projects.
let noProject = allEmployee.filter((eachData)=>eachData.projects.length==0)
console.log(noProject)
