let str =
  "Angelica Santana Mohamed Sloan Selene HobbsBrendan Hardin Vada Guzman Jude White Layla Vasquez Rowan Stephenson Khaleesi Sawyer";

//   count the number of vowels in the string

str = str.toLowerCase()
let arr = str.split("")
let vowels=['a','e','i','o','u']
let count =0
arr.forEach((eachLetter)=>{
    vowels.forEach((eachVowels)=>{
        if(eachLetter==eachVowels){
            count++
        }
    })
})
console.log(count)