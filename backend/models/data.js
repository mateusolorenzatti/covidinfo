const DataTypes = require('sequelize')
const conexao = require('../config/database')

const Data = conexao.define("data", {
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_cases: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_deaths: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_recovered: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        active_cases: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        cases_1m: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deaths_1m: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_tests: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        tests_1m: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = Data