const jwt = require('jwt-simple')
const cfg = require('../config/config_jwt')

const User = require('../models/user')

module.exports = app => {

    app.post("/token", (req, res) => {

        if (req.body.email && req.body.password) {
            // busca usuário no bd
            User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            }).then(user => {
                //retornar um token
                const payload = user.id
                res.json({
                    token: jwt.encode(payload, cfg.jwtSecret)
                })
            }).catch(error => res.status(401).json(error))

        } else {
            res.status(401)
        }
    })
};