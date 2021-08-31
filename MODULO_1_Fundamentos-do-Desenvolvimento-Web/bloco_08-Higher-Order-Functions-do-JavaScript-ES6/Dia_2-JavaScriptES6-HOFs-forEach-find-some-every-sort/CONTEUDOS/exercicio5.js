// Para fixar
// Array.some()

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return names.some((nomeAtual) => nomeAtual === name); // tb poderia usar arr.some ao inves de names.some
}

console.log(hasName(names, 'Ana'))

