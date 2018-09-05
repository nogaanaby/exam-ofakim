const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongojs = require('mongojs')
// you need to open a db and collection on mongo that matches those names
const db = mongojs('nodejsSTART', ['users'])

const app = express()

// Body parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// set static path
app.use(express.static(path.join(__dirname, '../dist')))

/** ************* USERS ***************/

app.post('/users/add', function (req, res) {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  }
  db.users.insert(newUser, (err) => {
    if (err) {
      console.log(err)
    }
    res.send('User Added!')
  })
})

app.post('/users/login', function (req, res) {
  const checkUser = db.users.find({ qty: { username: req.body.username, password: req.body.password } })
  if (checkUser) {
    res.send('You Are In!')
  } else {
    res.send('There are no user who matches this input')
  }
})

app.listen(3000, function () {
  console.log('server on port 3000 by noga')
})
