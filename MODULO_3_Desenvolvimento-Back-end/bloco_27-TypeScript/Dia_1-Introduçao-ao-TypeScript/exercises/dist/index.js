"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`Losango com diagonal maior de 32 cm e diagonal menor de 18 cm: ${Exercise.losango(32, 18)} cm²`);
console.log(`Losango com diagonal maior de 200 cm e diagonal menor de 50 cm: ${Exercise.losango(200, 50)} cm²`);
console.log(`Losango com diagonal maior de 75 cm e diagonal menor de 25 cm: ${Exercise.losango(75, 25)} cm²`);
console.log(`trapézio com altura de 50 cm, base maior de 100 cm e base menor de 70 cm: ${Exercise.trapezio(50, 100, 70)} cm²`);
console.log(`trapézio com altura de 35 cm, base maior de 75 cm e base menor de 50 cm: ${Exercise.trapezio(35, 75, 50)} cm²`);
console.log(`trapézio com altura de 80 cm, base maior de 150 cm e base menor de 120 cm: ${Exercise.trapezio(80, 150, 120)} cm²`);
console.log(`circulo com raio de 25 cm: ${Exercise.circulo(3.1416, 25)} cm²`);
console.log(`circulo com raio de 100 cm: ${Exercise.circulo(3.1416, 100)} cm²`);
console.log(`circulo com raio de 12,5 cm: ${Exercise.circulo(3.1416, 12.5)} cm²`);
