require('dotenv').config();//
const express = require('express');//
const morgan = require('morgan');//
const path = require('path');//
const hbs = require('hbs')//
const dbConCheck = require('./db/dbConnectCheck');//
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes')

const { User } = require('./db/models');
const { PORT } = process.env;

const app = express();//
dbConCheck();

app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));//чтобы читать тело запроса
app.use(express.json());//чтобы можно было читать json форматы

app.use('/', userRoutes);
app.use('/main', indexRoutes);

app.listen(PORT ?? 3100, () => {
  console.log(`Server started ${PORT}`);
});

