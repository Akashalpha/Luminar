let sentence = "hello hai hello hai world"
// display the word count of each word (key:value)
// let result = {hello:2 , hai:2 , world:1}

let arr=sentence.split(" ")
let result ={}
arr.forEach((eachWord)=>{
    if(eachWord in result ){
        result[eachWord]=result[eachWord]+1
    }else {
        result[eachWord]=1
    }
})
console.log(result)