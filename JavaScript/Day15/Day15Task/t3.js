// Check whether a string is a palindrome.

let str = "malayalam"
let reverse = str.split('').reverse().join('')
str == reverse?console.log("Palindrome"):console.log("Not Palindrome")