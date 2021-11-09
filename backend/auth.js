const passport = require("passport")
const { ExtractJwt, Strategy } = require("passport-jwt")

const cfg = require("./config/config_jwt")

const User = require('./models/user')


module.exports = app => {
    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done) => {
        User.findByPk(payload)
            .then(user => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    })
    
    passport.use(strategy)

    return {
        initialize: () => {
            return passport.initialize()
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession)
        }
    }
}