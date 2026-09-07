// T T T T T
//     T
//     T
//     T
//     T

for (let row = 1; row <= 5; row++) {
  rowStr = "";
  for (let col = 1; col <= 5; col++) {
    if (row == 1 || col == 3) {
      rowStr += "T ";
    } else {
      rowStr += "  ";
    }
  }
  console.log(rowStr);
}
