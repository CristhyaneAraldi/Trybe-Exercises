// EXERCISE 1
// reduce()

// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, array) => acc.concat(array), []);
};

console.log(flatten());
// concat cria um novo array unindo todos os elementos que foram passados como parâmetro

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);