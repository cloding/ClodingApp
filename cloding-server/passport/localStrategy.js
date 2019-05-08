const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username })
    .then(foundUser => {
      if (!foundUser) throw new Error("Incorrect Username");
      if (!bcrypt.compareSync(password, foundUser.password)) throw new Error("Incorrect Password");

      return next(null, foundUser);
    })
    .catch(e => {
      next(null, false, {
          message: e.message
      })
    })
  }
));
