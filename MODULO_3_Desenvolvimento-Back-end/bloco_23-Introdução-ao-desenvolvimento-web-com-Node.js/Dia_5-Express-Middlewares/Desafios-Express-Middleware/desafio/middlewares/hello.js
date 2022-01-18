const  express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const helloMiddleware = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ "message": `Hello, ${ name }!` })
};

app.post('/hello', helloMiddleware);

app.listen(3000, () => console.log('App rodando na porta 3000'));

module.exports = helloMiddleware;