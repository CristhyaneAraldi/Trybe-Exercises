const readLine = require('readline-sync');

// const peso = 50;
// const altura = 1.64;

function calcIMC () {
  const peso = readLine.questionInt('Qual seu peso (em quilos)?');
  const altura = readLine.questionFloat('Qual sua altura (em metros)?');

  console.log(`Peso: ${peso}, Altura: ${altura} `);
  
  const imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

calcIMC();