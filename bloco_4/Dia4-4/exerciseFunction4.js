function nomes(arrayNomes) {
  let maiorNome = arrayNomes[0];
  for (let indice in arrayNomes) {
    if (maiorNome.length < arrayNomes[indice].length) {
      maiorNome = arrayNomes[indice];
    }
  }
  return maiorNome;
}

arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomes(arrayNomes));