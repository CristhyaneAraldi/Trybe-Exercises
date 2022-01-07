const readLine = require('readline-sync');

const calcVelocidade = () => {
  const distancia = readLine.questionInt('Digite a distância percorrida (em metros): ');
  const tempo = readLine.questionInt('Digite o tempo decorrido (em segundos): ');

  console.log(`Distância: ${distancia}, Tempo: ${tempo}`);

  const velocidade = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média foi de: ${velocidade} m/s`);
}

calcVelocidade();