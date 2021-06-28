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
let inputLine = "";

/* opção 1:
for (let index = 0; index <= base; index += 1) {
  console.log(inputLine)
  inputLine = inputLine + symbol
};
*/

for (let index = 0; index <= base; index += 1) {
  inputLine += symbol
  console.log(inputLine)
};
