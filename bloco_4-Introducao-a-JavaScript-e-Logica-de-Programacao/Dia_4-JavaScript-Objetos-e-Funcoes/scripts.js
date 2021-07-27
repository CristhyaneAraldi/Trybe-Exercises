/*
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
  };
*/

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log('A jogadora ' + player.name  + ' ' +  player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogadora tem ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')



let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}


let car = {
  type: 'Fiat',
  model: '500',
  color: 'white'
};

for (let index in car) {
  console.log(index, car[index]);
}



let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names) {
  console.log('Olá ' + names[index]);
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index, car[index]);
}


//funções

// Adição
function soma(a,b) {
  return a + b;
}
console.log(soma(5,2));

//Subtração
function subtrai(a,b) {
  return a - b;
}
console.log(subtrai(5,2));

//Multiplicação
function multiplica(a,b) {
  return a * b;
}
console.log(multiplica(5,2));

//Divisão
function divide(a, b) {
  return a / b;
}

console.log(divide(5,2));

//Módulo
function modulo(a,b) {
  return a % b
}

console.log(modulo(5,2));

