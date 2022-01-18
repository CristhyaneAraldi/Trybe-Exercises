const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'cris',
  password: '@cg090287',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;