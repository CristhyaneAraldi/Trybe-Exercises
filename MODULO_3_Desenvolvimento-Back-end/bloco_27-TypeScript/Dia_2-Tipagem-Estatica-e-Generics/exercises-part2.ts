// Arrays
let names: string[] = ["Mary Joe", "Alan Joe"];

// Tuplas
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

// Type Aliases
// Crie um type para um objeto que represente um pássaro
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois
type Sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

// Type Unions
// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso
type StatesOfMatter = "liquid" | "solid" | "gaseous";

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto
type IdentifierDocument = number | string;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows
type OperationalSystems = "linux" | "mac os" | "windows";

// Crie um type union que represente as vogais do alfabeto
type Vowels = "a" | "e" | "i" | "o" | "u";