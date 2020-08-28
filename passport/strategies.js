const LocalStrategy = require('passport-local').Strategy
const {user} = require('../db/model')
const bcrypt=require('bcrypt')
const localStrategy = new LocalStrategy(
    (username, password, done) => {
        console.log("hlo")
        user.findOne({
            where: {
                name: username
            }
        }).then((user) => {

            if (!user) {
                //Wrong username
                return done(null, false, {message: 'Wrong username'})
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                    return done(null, user)
                } 
                else {
                    // Correct username, wrong password
                    return done(null, false, {message: 'Wrong password'})
                }
            });

        }).catch((err) => {
            return done(err)
        })
    })

module.exports = {
    localStrategy
}