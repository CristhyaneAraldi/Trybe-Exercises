// CONTEUDOS
// Default Destructuring 
// property shorthand
// default parameters

// Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// const { nationality = 'Brazilian' } = person;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// ==============================

// altere a função getPosition utilizando a property shorthand

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

// alterando
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// ==============================

// escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));