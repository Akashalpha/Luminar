// Write a program that takes:

// marks
// attendance (percentage)

// Rules:

// If marks >= 50:
     // If attendance >= 75, print "Pass"
     // Otherwise, print "Attendance Shortage"
// Otherwise:
   // If attendance >= 75, print "Failed in Exam"
   // Otherwise, print "Failed in Exam and Attendance Shortage"


const marks = 40;
const attendance = 65;
if (marks >= 50) {
  if (attendance >= 75) {
    console.log("Pass");
  } else {
    console.log("Attendance Shortage");
  }
} else {
  if (attendance >= 75) {
    console.log("Failed in Exam");
  } else {
    console.log("Failed in Exam and Attendance Shortage");
  }
}
