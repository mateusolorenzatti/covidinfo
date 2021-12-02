const { Sequelize } = require("sequelize")

const conexao = new Sequelize('ADS', 'aula', 'aula', {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'covid'
})

module.exports = conexao