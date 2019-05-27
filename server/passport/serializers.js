const passport = require('passport');
const User = require('../models/User');

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, user) => {
    if (err) {
      return cb(err);
    }
      cb(null, user);
  });
});
