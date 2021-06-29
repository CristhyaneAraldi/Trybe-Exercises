function indiceDoMaiorValor(arrayNumeros) {
  let indiceMaiorValor = 0;
  for (let indice in arrayNumeros) {
    if (arrayNumeros[indiceMaiorValor] < arrayNumeros[indice]) {
      indiceMaiorValor = indice;
    }
  }
  return indiceMaiorValor;
} 
arrayNumeros = [2, 3, 6, 7, 10, 1];
console.log(indiceDoMaiorValor(arrayNumeros));