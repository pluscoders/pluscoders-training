require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs')
const dbConCheck = require('./db/dbConnectCheck');

const { User } = require('./db/models');
const { PORT } = process.env;

const app = express();
dbConCheck();

app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));//чтобы читать тело запроса
app.use(express.json());//чтобы можно было читать json форматы

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/register', (req, res) => {
  res.render('user/register');
});

app.post('/register', async (req, res) => {
  const { user_name, age } = req.body;
  const user = await User.create({ name: user_name, age });
  res.redirect('/users');
});

app.get('/users', async (req, res) => {
  // const users = [
  //   { name: 'Abob', age: 14 },
  //   { name: 'bob', age: 24 },
  // ];
  const users = await User.findAll();
  res.render('user/users', { users });
});

app.listen(PORT ?? 3100, () => {
  console.log(`Server started ${PORT}`);
});
