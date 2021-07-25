// Parte 1
// Exercício 1

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function ordenaArray() {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[4] = 7;
  oddsAndEvens[5] = 10;
  oddsAndEvens[6] = 13;

  return oddsAndEvens
}

console.log(ordenaArray(oddsAndEvens));

// outra forma
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// usando o método array.sort()
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort();

console.log(oddsAndEvens); 
// [ 10, 13, 2, 3, 4, 7 ] devido a  pontuação de código unicode (compara como se fossem strings)

// retornar ordenada
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function compararNumeros(a, b) {
  return a - b;
}

console.log(oddsAndEvens.sort(compararNumeros));

// simplificando
let oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

// em 1 linha
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);