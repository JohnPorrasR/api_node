const password = require('passport');

const JwtStrategy = require('./strategies/jwt.strategy');

password.use(JwtStrategy);
