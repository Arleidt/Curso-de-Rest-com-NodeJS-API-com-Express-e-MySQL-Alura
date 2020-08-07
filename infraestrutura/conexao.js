const mysql = require('mysql')

//dentro do createConnection ele espera um obj com as configurações que
//precisamos colocar na conexão
const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'admin',
  database: 'agenda-petshop'
})

module.exports = conexao