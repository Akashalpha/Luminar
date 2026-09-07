// Find the first reccursive character from the given pattern = "ABBCCBAD"
// ans: B
let pattern = "ABBCCBAD"
let result={}
let arr=pattern.split('')
for(let element of arr){
    if(element in result){
        console.log(element)
        break
    }else{
        result[element]=1
    }
}