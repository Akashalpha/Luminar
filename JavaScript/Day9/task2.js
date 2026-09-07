//             13 
//         14  15
//     16  17  18
// 19  20  21  22


let i =13
for(let row=1;row<=4;row++){
    let rowStr=""
    for(let space =1;space<=4-row;space++){
        rowStr+="   "
    }
    for(let col=1;col<=row;col++){
        rowStr+=i+" "
        i++
    }
    console.log(rowStr)
}
