//Sobe servidor

const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

//app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));

//app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))