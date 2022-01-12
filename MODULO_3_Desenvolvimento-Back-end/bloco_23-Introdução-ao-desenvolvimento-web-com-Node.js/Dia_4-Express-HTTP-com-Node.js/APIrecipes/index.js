const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// app.get('/recipes', function (req, res) {
//   res.json(recipes);
// });

// Parametros de rota:

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params; // É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que você está desestruturando
//   const recipe = recipes.find((r) => r.id === parseInt(id)); // Implementamos uma busca no array receitas para encontrar a receita onde o id é igual ao valor que recebemos como parâmetro, tendo o cuidado de converter o valor para inteiro, já que por padrão todo parâmetro de rota é uma string

//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'}); // Indica para o express que ele deve quebrar o fluxo e não executar a linha abaixo

//   res.status(200).json(recipe); // No final, apenas retornamos o objeto receita que corresponde a receita encontrada.
// });

// Query String:

// app.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
