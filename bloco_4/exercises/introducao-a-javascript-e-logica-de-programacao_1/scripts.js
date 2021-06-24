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
} else {
  console.log("false")
}

//exercise 6
let chessPiece = "bishop";

switch(chessPiece){
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
    console.log("unidentified piece")
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