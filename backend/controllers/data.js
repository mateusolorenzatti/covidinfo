const { Sequelize } = require("sequelize")
const Op = Sequelize.Op

const Data = require('../models/data')

module.exports = app => {

    app.route("/data/:country").all(app.auth.authenticate())
    app.route("/data/rank/:criteria").all(app.auth.authenticate())

    app.get('/data/:country', (req, res) => {
        const countryName = req.params.country

        Data.findOne({
            where: {
                country: countryName
            }
        }).then(result => res.status(200).json(result))
            .catch(error => res.status(412).json(error))
    })

    app.get('/data/rank/:criteria', (req, res) => {
        const criteria = req.params.criteria
        const limit = (req.query.limit ? req.query.limit : 10)

        // console.log(criteria)

        if (['cases', 'deaths', 'tests'].includes(criteria)) {

            Data.findAll({
                order: [[criteria + '_1m', "DESC"]],
                limit: limit,
                where: {
                    tests_1m: {
                        [Op.not]: null, 
                    }
                }

            }).then(result => res.status(200).json(result))
                .catch(error => res.status(412).json(error))

        } else {
            res.status(412).json({ 'error': 'Invalid criteria' })
        }

    })

}