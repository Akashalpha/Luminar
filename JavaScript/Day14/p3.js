// 1
// 2  3
// 4  5  6
// 7  8  9  10

let i=1
for (let row = 1; row<=4; row++) {
    let patternRow =""
    for (let col = 1; col<=row; col++){
        patternRow+= i +' '  
        i++
    }console.log(patternRow)
}
