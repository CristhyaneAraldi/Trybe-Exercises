//exercise 1
let numero1 = 5;
let numero2 = 10;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero2 / numero1);
console.log(numero2 % numero1);

//exercise 2
let valor1 = 25;
let valor2 = 35;

if(valor1>valor2){
  console.log(valor1)
} else {
  console.log(valor2)
}

//exercise 3
let valor1 = 25;
let valor2 = 35;
let valor3 = 155;

if(valor1 > valor2 && valor1 > valor3){
  console.log(valor1)
} else if (valor2 > valor1 && valor2 > valor3){
  console.log(valor2)
} else {
  console.log(valor3)
}

//exercise 4
let valorDefinido = -102;

if(valorDefinido > 0){
  console.log("positive")
} else if(valorDefinido < 0){
  console.log("negative")
} else {
  console.log("zero")
}

//exercise 5
let angulo1 = 50;
let angulo2 = 60;
let angulo3 = 70;

if(angulo1 + angulo2 + angulo3 === 180){
  console.log("true")
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("ângulo inválido")
} else {
  console.log("false")
}

//exercise 6
let chessPiece = "BISHOP";

switch(chessPiece.toLowerCase()){
  case "king":
    console.log("horizontal, vertical and diagonal")
    break;
  case "rook":
    console.log("horizontal and vertical")
    break;
  case "bishop":
    console.log("diagonal")
    break;
  default:
    console.log("invalid piece")
}

//exercise 7
let nota = 70;

if(nota >= 90){
  console.log("A")
} else if(nota >= 80){
  console.log("B")
} else if(nota >= 70){
  console.log("C")
} else if(nota >= 60){
  console.log("D")
} else if(nota >= 50){
  console.log("E")
} else if(nota < 50){
  console.log("F")
} else {
  console.log("erro ao inserir nota")
}

//exercise 8
let num1 = 8;
let num2 = 5;
let num3 = 11;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  console.log("true")
} else {
  console.log("false")
}

//exercise 9
let num1 = 18;
let num2 = 22;
let num3 = 56;

if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
  console.log("true")
} else {
  console.log("false")
}

//exercise 10
let custo = 4.50;
let valorVenda = 10.00;

if (custo > 0 || valorVenda > 0) {
  let custoTotal = custo * 1.2
  let lucroFinal = (valorVenda - custoTotal) * 1000
  console.log(lucroFinal)
} else {
  console.log("Erro ao inserir valores: valor inserido é menor que zero")
}

//exercise 11
let salario = 3000.00;
let aliquotaINSS;
let aliquotaIR;

if (salario <= 1556.94) {
  aliquotaINSS = salario * 0.08;
} else if (salario <= 2594.92) {
  aliquotaINSS = salario * 0.09;
} else if (salario <= 5189.32) {
  aliquotaINSS = salario * 0.11;
} else {
  aliquotaINSS = 570.88
}

let salarioBase = salario - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase) * 0.15 - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase) * 0.225 - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - aliquotaIR;
console.log(salarioLiquido);