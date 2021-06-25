/*
n = 5

    *
   **
  ***
 ****
*****
*/

let base = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = base;

for (let line = 0; line <= base; line += 1) {
  for (let column = 0; column <= base; column += 1) {
    if (column < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }

  console.log(inputLine)
  inputLine = '';
  inputPosition -= 1;
};

