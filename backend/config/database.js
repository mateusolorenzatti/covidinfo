require('dotenv').config()

const { Sequelize } = require("sequelize")

var conexao = null

if (process.env.DATABASE_URL){
    conexao = new Sequelize({
        dialect: 'postgres',
        dialectOptions: {
            connectionString: process.env.DATABASE_URL
        },
        logging: false
    })
}else{
    conexao = new Sequelize('ADS', 'aula', 'aula', {
        host: 'localhost',
        dialect: 'postgres',
        schema: 'covid'
    })
}


module.exports = conexao