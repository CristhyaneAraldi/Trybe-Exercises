"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto "Olá Nome".
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// A quarta função que vamos desenvolver será para calcular a área do triângulo.
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// A quinta função que vamos desenvolver será para calcular a área do quadrado.
function square(side) {
    return side ** 2;
}
exports.square = square;
// E a última função que vamos desenvolver será para calcular a área do retângulo.
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// exercises part 2:
// Crie uma nova função para calcular a área do losango
function losango(diagonalMaior, diagonalMenor) {
    return (diagonalMaior * diagonalMenor) / 2;
}
exports.losango = losango;
// Crie uma nova função para calcular a área do trapézio
function trapezio(altura, baseMaior, baseMenor) {
    return ((baseMaior + baseMenor) * altura) / 2;
}
exports.trapezio = trapezio;
// Crie uma nova função para calcular a área do círculo
function circulo(PI, raio) {
    return PI * (raio ** 2);
}
exports.circulo = circulo;
