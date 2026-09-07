// 1
// 1  2
// 1  2  3
// 1  2  3  4


for(let row=1;row<=4;row++){
    let i=1
    let rowStr=""
    for(let col=1;col<=row;col++){
        rowStr+=i+" "
        i++
    }
    console.log(rowStr)
}