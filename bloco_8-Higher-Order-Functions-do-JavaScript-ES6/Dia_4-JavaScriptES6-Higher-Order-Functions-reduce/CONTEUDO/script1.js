// CONTEUDOS

// Array.reduce
// EXEMPLOS

// ex 1: A função soma todos os valores de um array:
// Apenas com o for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113
// Necessidade de criar uma variável para acumular o resultado de cada iteração do for , a soma de cada resultado - let sumNumbers ;
// Necessidade de setar um valor inicial para variável - sumNumbers = 0 ;


// ================================

// ex 2: Com .reduce :
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:
const numbers = [32, 15, 3, 2, -5, 56, 10];
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
// O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number ;

// ================================

// ex 3: 
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator); // 1 3 6 10
    return accumulator + number;
  };
  
  const sumNumbers = collection.reduce(getSum);
  console.log(sumNumbers); // 15