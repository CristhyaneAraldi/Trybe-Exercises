// Interfaces
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// Uma interface também pode estender de uma outra
interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

// Crie uma interface cujo objeto represente um Automóvel
interface Automobile {
  name: string;
  maker: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

// Crie uma interface cujo objeto represente um Felino
interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

// Crie uma interface cujo objeto represente uma Aeronave
interface Aircraft {
  model: string;
  maker: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}