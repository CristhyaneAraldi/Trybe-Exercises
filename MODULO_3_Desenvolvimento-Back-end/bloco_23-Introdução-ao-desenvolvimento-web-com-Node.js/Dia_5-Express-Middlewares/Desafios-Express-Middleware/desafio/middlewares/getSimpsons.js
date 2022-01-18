const express = require('express');
const fs = require('fs').promises;

const app = express();

const getSimpsonsMiddleware = async (req, res) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((response) => JSON.parse(response));
  res.status(200).json(simpsons)
}

app.get('/simpsons', getSimpsonsMiddleware);

app.listen(3000, () => console.log('App rodando na porta 3000'));

module.exports = getSimpsonsMiddleware;