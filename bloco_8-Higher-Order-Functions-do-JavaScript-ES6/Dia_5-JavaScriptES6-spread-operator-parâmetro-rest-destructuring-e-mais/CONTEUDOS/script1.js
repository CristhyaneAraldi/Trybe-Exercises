// CONTEUDOS
// spread operator

// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'melancia', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['cereja', 'sorvete', 'calda'];

const fruitSalad = (fruit, additional) => {

  const fruitSaladaComplete = [...fruit, ...additional];
  return fruitSaladaComplete;

};

console.log(fruitSalad(specialFruit, additionalItens));