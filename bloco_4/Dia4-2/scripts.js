/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa


tasksList.unshift('meditar');
console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();
console.log(tasksList);


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
*/

//exercício 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//exercício 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//exercício 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

//Atividades enovlvendo uso do FOR
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}
//exercício 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for( let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//Atividades com for/of

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

//exercício 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {
    console.log(elementos);
}