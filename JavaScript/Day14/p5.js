//             13
//         14  15
//     16  17  18
// 19  20  21  22

let i =13;
for(let row=1;row<=4;row++){
    let pattern =""
    for (let space = 0; space <= 4-row; space++) {
       pattern+="   "    
    }
    for (let col = 1; col <=row; col++) {
        pattern+= i++ +" "    
    }
    console.log(pattern)
}
