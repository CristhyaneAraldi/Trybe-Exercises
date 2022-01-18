const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'cris',
  password: '',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;

// createPool cria um pool de conexões com o banco de dados. 
// A própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco. 