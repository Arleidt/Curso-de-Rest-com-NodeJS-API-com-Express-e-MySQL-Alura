const Atendimento = require('../models/atendimentos');
//Controle de rotas e o que fazer para acessar cada uma
//É nele que iremos controlar a rota app.get configuramos a rota de atendimentos
//e recebendo o app. Portanto quando exportamos esse módulo, exportamos uma 
//função que realiza essa configuração.
module.exports = app => {

  //enviando dados para o client
  app.get('/atendimentos', (req, res) => 
  res.send('Você está na rota de atendimentos e está realizando um GET'))

  //user nos enviando dados
  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    //console.log('Atendimento enviado')
    //ver o que o cliente está enviando para a gente
    //req.body está recebendo todos dados que estamos enviando
    //console.log(req.body)
    Atendimento.adiciona(atendimento)
    res.send('POST atendimento')
  })


}

/* O body, o relativo ao corpo do site, e header seria o cabeçalho. No header
vamos enviar algumas coisas relativas a requisição. 
Na área de trabalho do Postman podemos fazer algumas configurações 
da requisição: tipo de conteúdo, tamanho da requisição, qual user e assim 
por diante.Neste vídeo trabalharemos apenas com "content-type", 
isto é, tipo do conteúdo. 

O contet-type padrão é o "urlencoded", que está relacionado aos formulários 
produzidos em html. Na aba "body" na área de trabalho do Postman enviaremos 
essa requisição com o nome "juliana".

Ao observarmos nosso console, receberemos undefined. Isso ocorreu porque nossa 
requisição não sabe ler nosso body. Para que a aplicação conseguia entender a 
requisição, instalaremos uma biblioteca chamada body´-parser, cuja função é 
justamente converter as requisições para algo que seja legível no JavaScript. 
 key: Content-Type  value: application/x-www-form-urlencoded
*/