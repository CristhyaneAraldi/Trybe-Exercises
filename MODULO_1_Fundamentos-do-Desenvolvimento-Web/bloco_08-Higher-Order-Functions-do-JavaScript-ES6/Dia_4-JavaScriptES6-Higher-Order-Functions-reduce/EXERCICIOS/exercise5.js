// EXERCISE 5
// reduce()

// 5 - Dado o array de nomes, retorne a quantidade de vezes em que aparece a letra A maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => 
    acc + name.split('').reduce((accumulator, letter) => {
      if (letter.toLowerCase() === 'a') return accumulator + 1;
      return accumulator;
    }, 0), 0);
};

console.log(containsA());

assert.deepStrictEqual(containsA(), 20);