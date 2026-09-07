// program to check if a 3 digit number is amstrong or not

let num = 153
let ognum = num
let temp = 0
while(num>0){
    let lastDigit = num %10
    temp += lastDigit**3
    num = Math.floor(num/10)
}
if(ognum == temp){
   console.log("is amstrong") 
}else{
    console.log("not amstrong")
}