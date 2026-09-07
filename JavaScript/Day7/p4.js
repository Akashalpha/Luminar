// program to count how many even and odd digits are present in a number using do while 

let num = 12345
let count1 = 0
let count2 =0
do {
    let remainder = num%10
    if(remainder%2==0){
        count1++
    }else{
        count2++
    }num=Math.floor(num/10)
}while(num>0)

console.log(count1)
console.log(count2)