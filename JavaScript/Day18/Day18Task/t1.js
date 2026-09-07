const students = [
{ name: "Arun", age: 20, course: "MERN", mark: 85, place: "Kochi" },
{ name: "Meera", age: 21, course: "Python", mark: 72, place: "Calicut" },
{ name: "Rahul", age: 19, course: "MERN", mark: 91, place: "Kochi" },
{ name: "Anjali", age: 22, course: "Java", mark: 68, place: "Thrissur" },
{ name: "Vishnu", age: 20, course: "MERN", mark: 78, place: "Kollam" },
{ name: "Sneha", age: 21, course: "Python", mark: 88, place: "Kochi" },
{ name: "Akhil", age: 23, course: "Java", mark: 64, place: "Calicut" },
{ name: "Devika", age: 20, course: "MERN", mark: 95, place: "Thrissur" },
{ name: "Nikhil", age: 22, course: "Python", mark: 81, place: "Kollam" },
{ name: "Fathima", age: 19, course: "Java", mark: 76, place: "Kochi" }
];

// print all student names.

students.forEach((eachItem)=>{
     let eachStudent = eachItem.name
    console.log(eachStudent)
})
console.log('--------------------')


// Print the names of students who scored more than 80.

let scoreGt80 = students.filter((eachStudent)=>eachStudent.mark>80).map((eachStudent)=>eachStudent.name)
console.log(scoreGt80)
console.log('---------------------------------------------------')


// Print the names of students who are studying MERN.

let studyingMERN = students.filter((eachStudent)=>eachStudent.course==="MERN").map((eachStudent)=>eachStudent.name)
console.log(studyingMERN)
console.log('---------------------------------------------------')


// Print all students from Kochi.

let kochi = students.filter((eachStudent)=>eachStudent.place==="Kochi")
console.log(kochi)
console.log('--------------------')


// Find the student who scored the highest mark.

let htMark = students.reduce((acc,curr)=>acc.mark>curr.mark?acc:curr)
console.log(htMark)
console.log('--------------------')


// Find the student who scored the lowest mark.

let ltMark = students.reduce((acc,curr)=>acc.mark<curr.mark?acc:curr)
console.log(ltMark)
console.log('--------------------')


// Calculate the total marks of all students.

let totalMarks = students.reduce((acc,curr)=>acc+curr.mark,0)
console.log(totalMarks)
console.log('--------------------')


// Calculate the average mark of all students.

console.log(totalMarks/students.length)
console.log('--------------------')


// Print the names of students whose age is above 20.

let ageGt20 = students.filter((eachStudent)=>eachStudent.age>20).map((eachStudent)=>eachStudent.name)
console.log(ageGt20)
console.log('--------------------')


// Print the students who scored between 70 and 90.

let bt70And90 = students.filter((eachStudent)=>eachStudent.mark>70&&eachStudent.mark<90)
console.log(bt70And90)
console.log('--------------------')


// Find the total number of students studying MERN.

console.log(studyingMERN.length)
console.log('--------------------')


// Print the names of students from Kochi who scored more than 80.

let gt80Kochi = students.filter((eachStudent)=>eachStudent.mark>80&&eachStudent.place=="Kochi").map((eachStudent)=>eachStudent.name)
console.log(gt80Kochi)
console.log('--------------------')


// Find the average mark of MERN students.

let studentsMERN = students.filter((eachStudent)=>eachStudent.course=="MERN")
let totalMarkMERN = studentsMERN.reduce((acc,curr)=>acc+curr.mark,0)
let averageMarkMERN = totalMarkMERN/studyingMERN.length
console.log(averageMarkMERN)
console.log('--------------------')


// Sort the students based on their marks from highest to lowest.

let markHTtoLT = students.sort((a,b)=>b.mark-a.mark)
console.log(markHTtoLT)
console.log('--------------------')


// Create a new array containing only the name and mark of each student.

let newArr = students.map((eachStudent)=>({
    name:eachStudent.name,
    mark:eachStudent.mark
}))
console.log(newArr)