const num1=10
const num2=10
const num3=1
// this code will check whether if any of the two numbers are also equal
if(num1>=num2 && num1>num3){
    console.log(num1,"Is largest")
}
else if(num2>num1 && num2>=num3){
    console.log(num2,"Is largest")
}
else if(num3>=num1 && num3>num2){
    console.log(num3,"Is largest")
}
else if(num1==num2  && num1==num3){
    console.log("Equal Numbers")
}
else(
    console.log("Invlid Input")
)