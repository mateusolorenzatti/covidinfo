const conexao = require('./database')

const express = require('express')
const consign = require('consign')
const cors = require('cors')
const expressOasGenerator = require('express-oas-generator')

module.exports = () => {
    // criando a aplicação - instância do express

    const app = express()
    
    app.use(cors())

    consign()
        .include('auth.js')
        .then('libs/middlewares.js')
        .then('controllers')
        .into(app)

    expressOasGenerator.init(app, {})
    
    return app
}
