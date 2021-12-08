require('dotenv').config()
const custom_express = require('./config/custom_express')
const conexao = require('./config/database')

const User = require('./models/user')
const Task = require('./models/data')

//definindo porta
const PORT = process.env.PORT || 3000

;(async () => {
    try {
        await conexao.sync();
        const app = custom_express()
        // rodando a API
        app.listen(PORT, () => {
            console.info(`Rodando na porta ${PORT}`)
        })
    } catch (error) {
        console.error(error);
    }
})();