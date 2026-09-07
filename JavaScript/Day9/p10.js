// B B B B B
// B       B
// B       B
// B B B B B
// B       B
// B       B
// B B B B B

for (let row = 1; row <= 7; row++) {
  let rowStr = "";
  for (let col = 1; col <= 5; col++) {
    if (row == 1 || col == 1 || row == 4 || col == 5 || row == 7) {
      rowStr += "B ";
    } else {
      rowStr += "  ";
    }
  }
  console.log(rowStr);
}

console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");

// B B B B
// B       B
// B       B
// B B B B B
// B       B
// B       B
// B B B B

for (let row = 1; row <= 7; row++) {
  let rowStr = "";
  for (let col = 1; col <= 5; col++) {
    if (
      (row == 1 && col != 5) ||
      col == 1 ||
      row == 4 ||
      (col == 5 && row != 1 && row != 7) ||
      (row == 7 && col != 5)
    ) {
      rowStr += "B ";
    } else {
      rowStr += "  ";
    }
  }
  console.log(rowStr);
}
