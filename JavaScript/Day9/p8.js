// *
//   *
//     *
//       *

for (let row = 1; row <= 4; row++) {
  rowStr = "";
  for (let col = 1; col <= 4; col++) {
    if (row == col) {
      rowStr += "* ";
    } else {
      rowStr += "  ";
    }
  }
  console.log(rowStr);
}
