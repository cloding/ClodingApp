const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      // console.log('req.login ')
      console.log(err)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}

router.post('/signup', (req, res, next) => {

  const {username, password, mail, country, region, city, direction} = req.body;

  // console.log('username', username)
  // console.log('password', password)

  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }
  if (!mail){
    next(new Error('You must provide valid mail'));
  }
  if (!country || !region || !city || !direction){
    next(new Error('You must provide all adress data'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const balance  = 0;

    return new User({
      username,
      password: hashPass,
      mail,
      country,
      region,
      city,
      direction,
      balance
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});


// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, theUser, failureDetails) => {
    
//     // Check for errors
//     if (err) next(new Error('Something went wrong')); 
//     if (!theUser) next(failureDetails)

//     // Return user and logged in
//     login(req, theUser).then(user => res.status(200).json(req.user));

//   })(req, res, next);
// });

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) { res.status(500).json({ message: 'Something went wrong authenticating user' }); return; }
      // "failureDetails" contains the error messages from our logic in "LocalStrategy" { message: '...' }.
      if (!theUser) { res.status(401).json(failureDetails); return; }
      // save user in session
      req.login(theUser, (err) => {
          if (err) { res.status(500).json({ message: 'Session save went bad.' }); return; }
          // We are now logged in (that's why we can also send req.user)
          res.status(200).json(theUser);
      });
  })(req, res, next);
});


router.get('/loggedin', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})

router.post('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;
