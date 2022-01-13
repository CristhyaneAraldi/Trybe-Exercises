const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const greetingMiddleware = (req, resp) => {
  const { name, age } = req.body;
  
  if (age >= 18) {
    resp.status(200).json({ "message": `Hello, ${ name }!` })
  } 

  resp.status(401).json({"message": "Unauthorized"})
}

app.post('/greeting', greetingMiddleware);

app.listen(3000, () => console.log('App rodando na porta 3000'));

module.exports = greetingMiddleware;