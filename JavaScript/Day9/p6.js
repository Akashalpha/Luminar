//  1 2 1 2
//  1 2 1 2
//  1 2 1 2
//  1 2 1 2

for (let row = 1; row <= 4; row++) {
  let rowStr = "";
  for (let col = 1; col <= 4; col++) {
    if (col % 2 != 0) {
      rowStr += "1 ";
    } else {
      rowStr += "2 ";
    }
  }
  console.log(rowStr);
}
