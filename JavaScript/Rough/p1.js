let numbers = [10, 20, 30, 20, 40, 30];
for(let i=0;i<=numbers.length;i++){
    if(numbers.indexOf(numbers[i])!==i){
        console.log(numbers[i])
        break
    }
    
}