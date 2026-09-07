// program to find if a number is spy number

let num = 123
let tempSum = 0
let tempProduct=1
while(num>0){
    lastDigit = num%10
    tempSum+=lastDigit
    tempProduct*=lastDigit
    num = Math.floor(num/10)

}
if(tempSum==tempProduct){
    console.log("Is a Spy Number")
}else{
        console.log("Is not a Spy Number")

}