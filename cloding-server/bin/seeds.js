const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/cloding-server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "Luca",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "luca@gmail.com",
    country: "Italy",
    region: "North",
    city: "Belevile",
    direction: "False Street 123"
  },
  {
    username: "Charly",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "charly@gmail.com",
    country: "Spain",
    region: "Madrid",
    city: "Madrid",
    direction: "False Street 123"
  },
  {
    username: "Alice",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "alice@gmail.com",
    country: "England",
    region: "Nowhere",
    city: "Sprinfield",
    direction: "False Street 123"
  },
  {
    username: "Berto",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "berto@gmail.com",
    country: "Spain",
    region: "Catalunya",
    city: "Barcelona",
    direction: "False Street 123"
  },
  {
    username: "Polo",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "bdsmlover@gmail.com",
    country: "Spain",
    region: "Aragón",
    city: "Zaragoza",
    direction: "False Street 123"
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})