require('dotenv').config()

const { Sequelize } = require("sequelize")

const conexao = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    schema: process.env.DB_SCHEMA,
    logging: process.env.ENV == 'dev' ? true : false,
    dialectOptions: {
        ssl: true
    }
})

module.exports = conexao