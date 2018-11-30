const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../models/admin');
const config = require('../config/db');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        Admin.getUserById(jwt_payload._id, (err, admin) => {
            if(err) {
                return done(err, false);
            }

            if(admin) {
                return done(null, admin);
            } else {
                return done(null, false);
            }
        });
    }));
}