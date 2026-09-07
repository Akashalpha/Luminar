// * * * *
// *     *
// *     *
// * * * *


for(let row=1;row<=4;row++){
    let rowStr=''
    for (let col = 1; col <=4; col++){
        if(row==1||col==4||col==1||row==4){
            rowStr+=' *'
        }else{
            rowStr+='  '
        }
      
    }
    console.log(rowStr)
}