const User = require('../models/user')

module.exports = app => {

    // app.route("/users").all(app.auth.authenticate())
    app.route("/users/:id").all(app.auth.authenticate())

    app.get("/users/:id", (req, res) => {
        User.findByPk(req.params.id)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

    app.post('/users', (req, res) => {
        // atribuindo o conteúdo da requisição
        const user = req.body

        // console.table(user)

        User.create(user)
            .then(res.status(201).json({ code: '201', msg: 'Usuário criado' }))
            .catch(error => res.status(412).json({ code: '412', msg: error.message }))
    })
}