const readLine = require('readline-sync');

const jogoAdivinhacao = () => {
  const sorteiaNumero = parseInt(Math.random() * 10);

  const resposta = readLine.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  if (sorteiaNumero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${sorteiaNumero}`);
  }

    return console.log('Parabéns, número correto!');
}

jogoAdivinhacao();