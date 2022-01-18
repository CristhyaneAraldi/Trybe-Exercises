const  express = require('express');

const app = express();

const pingMiddleware = (req, res) => {
  res.status(200).send('pong!');
}

app.get('/ping', pingMiddleware);

app.listen(3000, () => console.log('App rodando na porta 3000'));

module.exports = pingMiddleware;

// obs: esta pasta seria apenas pro middleware em si,
// o restante da requisição poderia ser feito no arquivo index.js