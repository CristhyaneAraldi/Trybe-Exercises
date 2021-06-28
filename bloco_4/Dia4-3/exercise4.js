/*
n = 5

  *
 ***
*****
*/


let base = 5;
let symbol = '*';
let inputLine = '';
let midOfMatriz = (base + 1) / 2;
let controlRight = midOfMatriz;
let controlLeft = midOfMatriz;

for (let line = 0; line <= midOfMatriz; line += 1) {
  for (let column = 0; column <= base; column += 1) {
    if (column > controlLeft && column < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }

  console.log(inputLine)
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1;
};
