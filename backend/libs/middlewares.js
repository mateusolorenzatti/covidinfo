const express = require('express');

module.exports = app => {
    app.set("json spaces", 4)
    app.use(express.json())
    app.use(app.auth.initialize())
    // app.use(app.auth.authenticate())
}