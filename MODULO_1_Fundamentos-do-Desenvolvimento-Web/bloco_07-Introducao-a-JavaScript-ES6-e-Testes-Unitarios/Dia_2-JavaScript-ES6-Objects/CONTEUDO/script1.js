// Parte 1
const customer = {
	firstName: 'Roberto',
	age: 22,
	job: 'Teacher',
};

// Adicionar propriedade (forma 1)
const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};

// Adicionar propriedade (forma 2)
// ex 1
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

// ex 2
const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);

customer2['lastName'] = 'Silva';
console.log(customer2);

// Adicionar novas propriedades/chaves
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);