// *        *
//   *    *
//     * 
//  *     * 
//*          *   



for(let row=1;row<=7;row++){
    let rowStr=''
    for(let col=1;col<=7;col++)
        {
        if(row==col||row+col==8){
            rowStr+=" *"
        }else{
            rowStr+="  "
        }
    }
    console.log(rowStr)
}