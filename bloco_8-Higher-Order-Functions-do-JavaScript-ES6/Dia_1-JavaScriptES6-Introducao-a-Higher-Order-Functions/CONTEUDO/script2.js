// Higher Order Functions

// exemplo 1 - addEventListener é uma HOF
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// exemplo 2
// as HOF nos permitem compactar ações e não somente repassar valores.
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

// repeat(5, console.log);
// repeat(5, console.table);
repeat(5, console.group);

// exemplo 3
// testando números pares
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// exemplo 4 
// testando números ímpares
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// exemplo 5
const numberGenerator = () => {
  return Math.random() * 100;
}

// console.log(numberGenerator);
console.log(numberGenerator()); // mesma lógica para callback dentro de outras funções