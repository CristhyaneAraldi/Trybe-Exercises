// Conteudo 8.1

// First-Class Functions
// Podemos atribuir funções à variáveis
//exemplo 1:
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

// exemplo 2:
const sum = (number1, number2) => {
  return number1 + number2;
};

// Podemos passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

// Podemos retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));