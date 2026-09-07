// 100  90  80  70
// 60   50  40
// 30   20
// 10

let i = 100;
for (let row = 4; row >= 1; row--) {
  let patternRow = "";
  for (let col = 1; col <= row; col++) {
    patternRow += i + " ";
    i -= 10;
  }
  console.log(patternRow);
}
