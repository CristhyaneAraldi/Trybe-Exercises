let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
console.log(numbers);
//ou
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);

//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
let average = sum / numbers.length;
console.log(average);

//exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
let average = sum / numbers.length;

if (average > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor ou igual a 20")
}

//exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);

//exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}
if (result === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(result);
}