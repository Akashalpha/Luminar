// * * * *
// # # # #
// * * * *
// # # # #
// * * * *

for (let row = 1; row <= 5; row++) {
  let rowStr = "";
  for (let col = 1; col <= 4; col++) {
    if (row % 2 != 0) {
      rowStr += "* ";
    } else {
      rowStr += "# ";
    }
  }
  console.log(rowStr);
}
