//    *
//   *  *
//  *  *  *
// *  *  *  *

for (let row = 4; row >= 1; row--) {
  let rowStr = "";
  for (let col = 1; col <= row; col++) {
    rowStr += " ";
    if (row == 1 && col == 1) {
      rowStr += "* * * *";
    } else if (row == 2 && col == 1) {
      rowStr += " * * * ";
    } else if (row == 3 && col == 1) {
      rowStr += "  * * ";
    } else if (row == 4 && col == 1) {
      rowStr += "   *  ";
    } else {
      rowStr += "";
    }
  }
  console.log(rowStr);
}
