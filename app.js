// const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const expressValidator = require('express-validator')
// const mongojs = require('mongojs')
// const db = mongojs('nodejsSTART', ['users'])

// const app = express()

// //view engine
// app.set('view engine', 'vue.js')
// app.set('views', path.join(__dirname, 'src'))

// //Body parser Middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// //set static path
// app.use(express.static(path.join(__dirname, 'frontend')))

// //GLOBAL CONSTS
// app.use(function(req, res, next){
//   res.locals.errors = null
//   next()
// })

// // express validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value){
//     const namespace = param.split('.')
//     , root  = namespace.shift()
//     , formparam = root

//     while (namespace.length) {
//       formparam += '[' + namespace.shift() + ']'
//     }

//     return {
//       param : formparam,
//       msg   : msg,
//       value : value
//     }
//   }
// }))

// app.get('/', function(req, res){
//   db.users.find(function (err, docs) {
//     res.render('index', {
//       title: 'MongoDB UI',
//       users: docs
//     })
//   })
// })

// /*************** USERS ***************/

// app.post('/users/add', function(req, res) {

//   req.checkBody('username', 'name is required').notEmpty()
//   req.checkBody('email', 'email is required').notEmpty()
//   req.checkBody('password', 'password is required').notEmpty()

//   const errors = req.validationErrors()

//   if (errors) {
//     res.render('index', {
//       title: 'Some Title',
//       errors: errors
//     })
//   } else {
//     const newUser = {
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     }
//     db.users.insert(newUser, (err, res) => {
//       if(err) {
//         console.log(err)
//       }
//     })
//   }
//   res.redirect('/')
// })

// app.post('/users/addAttr/:persId/:newAttr', function(req, res) {
//   const attr = req.params.newAttr
//   console.log(req.params.newAttr)
//   db.users.update( {_id : mongojs.ObjectId(req.params.persId) }, {$set: {newattr:attr}})
//   res.redirect('/')
// })

// app.post('/users/editAttr/:persId/:attr/:value', function(req, res) {
//   const attr = req.params.attr
//   const value = req.params.value
//   console.log(req.params.newAttr)
//   db.users.update( {_id : mongojs.ObjectId(req.params.persId) }, {$set: {attr:value}})
//   res.redirect('/')
// })

// app.delete('/users/delete/:persId', function(req, res){
//   db.users.remove( {_id : mongojs.ObjectId(req.params.persId) }, (err, res) => {
//     if(err){
//       console.log(err)
//     }
//   })
//   res.send('ok')
// })

// /*************** collections ***************/

// app.post('/addCollection', function(req, res) {
//   const newCollection = req.body.collection
// })

// app.listen(3000, function(){
//   console.log('server on port 3000 by ng')
// })