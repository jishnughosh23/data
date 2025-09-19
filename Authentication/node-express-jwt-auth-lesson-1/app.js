const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const app = express();
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://jishnughosh:jishnutodo@cluster0.cz215bq.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/login', (req, res) => res.render('login'));

app.use(authRoutes);

// app.get('/set-cookies',(req,res)=>{
//   // res.setHeader('Set-Cookie','newUser=true');
//   // res.cookie('newUser',true,{maxAge:1000*60*60*24 , secure:true}) // for https because secure = true
//   res.cookie('newUser',false,{maxAge:1000*60*60*24 ,httpOnly:true})
//   res.send('You got the cookies!')
// })

// app.get('/read-cookies',(req,res)=>{
//   const cookies = req.cookies;
//   console.log(cookies);
//   res.json(cookies)
// })