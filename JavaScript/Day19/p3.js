// 12  13  14  15  16
//     17
//         18
//              19
//                  20

 let count =12
for (let row = 1; row <=5; row++) {
    let rowStr=""
    for (let col = 1; col <=5; col++) {
        if (row==1) {
           rowStr+=count+ " "
           count++
        }else if(row==col){
            rowStr+= count+ " "
            count++
        }else{
            rowStr+="   "
        }

        
        
    }
   console.log(rowStr) 
}