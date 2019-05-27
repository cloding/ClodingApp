require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const MongoStore   = require('connect-mongo')(session);
const cors         = require('cors');
const passport     = require('passport');
    
// {useNewUrlParser: true},
mongoose
  .connect(process.env.DB_LOCAL, { useNewUrlParser: true, useFindAndModify: false })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// configuración CORS
const whiteList = ['http://localhost:3000', 'https://cloding-app.herokuapp.com/']
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whiteList.includes(origin);
    cb(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());      

// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}));


// middlewares sesión
require('./passport')(app);
      
app.use(express.static(path.join(__dirname, "public")));


const index = require('./routes/index');
app.use('/api', index);

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const designRoutes = require('./routes/design');
app.use('/api', designRoutes);

app.use((req, res) => { res.sendFile(`${__dirname}/public/index.html`); })

module.exports = app;