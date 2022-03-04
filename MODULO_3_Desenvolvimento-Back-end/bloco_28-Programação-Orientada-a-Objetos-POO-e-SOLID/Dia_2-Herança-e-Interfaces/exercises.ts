class Animal {
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();

    if (today.getMonth() - this.birthDate.getMonth() <= 0 && today.getDate() <= this.birthDate.getDate()) {
      age--;
    }
    return age;
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const d1 = new Date();
d1.setFullYear(2015);
const m1 = new Mammal('Tatu', d1);

const myFunc = (animal: Animal) => {
  console.log(animal.age);
}

myFunc(m1);
m1.walk();

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const d2 = new Date();
d2.setFullYear(2017);

const b1 = new Bird('Papagaio', d2);
console.log(b1.age);
b1.fly();
