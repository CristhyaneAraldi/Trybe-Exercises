// Classes
enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Greem = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name  = name;
    this.birthDate  = birthDate;
    this.eyeColor  = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
}

// constructor: função utilizada para construir um objeto a partir da classe
// nele recebemos todos os dados necessários para construir um objeto de pessoa

// usamos o this para acessar as propriedades da instância da classe
// ele representa a própria instância que estamos criando
// atribuimos o valor do parâmetro recebido a propriedade da instância da classe

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."

// Adiiconando uma informação após a criação:
person1.eyeColor = EyeColor.Brown;
console.log(person1);

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }


// exercicios:
// Crie uma classe cujo objeto represente um Cachorro
class Dog {
  _name: string;
  _age: number;
  _color: string;
  _breed: string;

  constructor(name: string, age: number, color: string, breed: string) {
    this._name = name;
    this._age = age;
    this._color = color;
    this._breed = breed;
  }

  bark(): void {
    console.log("Au Au");
  }
}

// Crie uma classe cujo objeto represente uma Casa
class House {
  _residentsNumber: number;
  _address: string;
  _color: string;

  constructor(residentsNumber: number, address: string, color: string) {
    this._residentsNumber = residentsNumber;
    this._address = address;
    this._color = color;
  }
}

// Crie uma classe cujo objeto represente um Voo
class Flight {
  _origin: string;
  _destination: string;
  _passengers: number;

  constructor(origin: string, destination: string, passengers: number) {
    this._origin = origin;
    this._destination = destination;
    this._passengers = passengers;
  }
}