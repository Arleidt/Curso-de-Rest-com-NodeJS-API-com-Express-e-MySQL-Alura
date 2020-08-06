//configurações do Express

const express = require('express');
//Muito embora tenhamos realizado a exportação, não utilizamos o conteúdo em lugar algum
//O consign irá agrupar todas as rotas que formos criando dentro do app.
const consign = require('consign');
const bodyParser = require('body-parser');


//criar um module.exports e exortar uma função, que no caso irá configurar 
//o aplicativo e irá retornar a variável app.
  module.exports = ()=>{ 
    const app = express()

//add biblioteca para usar dentro do express, ex: app.use(bodyParser.json())
//urlencoded passando formulario no postman
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //Chamaremos consign() e então iremos incluir todos os módulos de controllers 
    //dentro (into) de app
    consign()
        .include('controllers')
        .into(app)

    return app

  };