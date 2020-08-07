//Sobe servidor
const customExpress = require('./config/customExpress');

//importando conexão mysql
const conexao = require('./infraestrutura/conexao');

const Tabelas = require('./infraestrutura/tabelas');

//conexao.connect() mas para saber se deu certo falhou precisamos passar uma 
//function pra quando executar o connect vai executar a funçao

conexao.connect(erro => {
  if(erro) {
      console.log(erro)
  } else {
      console.log('conectado com sucesso')
      
      Tabelas.init(conexao)
      
      const app = customExpress()

      app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
  }
});

//app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));

//app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))