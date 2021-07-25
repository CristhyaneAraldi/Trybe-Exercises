// Parte 2

// Exercício 1
// Fatorial
const fatorial = num => {
  let result = 1;
  for (let index = 2; index <= num; index += 1) {
    result *= index;
  }
  return result;
}

console.log(fatorial(5));

// Recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));

// Exercício 2
const maiorPalavra = text => {
  let arrayDePalavras = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of arrayDePalavras) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

return result;
}

console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));

// em uma linha:
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));