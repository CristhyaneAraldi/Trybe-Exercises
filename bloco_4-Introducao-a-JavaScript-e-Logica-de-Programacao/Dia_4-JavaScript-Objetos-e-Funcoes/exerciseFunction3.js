function indiceMenorValor(arrayNumeros) {
  let indiceMenor = 0;
  for (let indice in arrayNumeros) {
    if (arrayNumeros[indiceMenor] > arrayNumeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
arrayNumeros = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenorValor(arrayNumeros));
