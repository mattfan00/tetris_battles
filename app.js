const express = require('express')
      http = require('http')
      socketio = require('socket.io')
      config = require('config')
      mongoose = require('mongoose')
      passport = require('passport')
      LocalStrategy = require('passport-local')
      User = require('./models/user')


const app = express()
      server = http.createServer(app)
      io = socketio(server)

const userRoutes = require('./routes/user')
      ioRoutes = require('./routes/socket')(io)



const db = config.get('mongoURI')
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())

app.use(require("express-session")({
  secret: "this is my secret",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// PASS IN THE CURRENT USER TO EVERY ROUTE
app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})


app.use(userRoutes)
ioRoutes

app.get('/', (req, res) => {
  console.log(req.user)
  res.render('index')
})

app.get('/game', (req, res) => {
  console.log(req.user)
  res.render('game')
})





server.listen(3000, () => console.log('Tetris server running'))