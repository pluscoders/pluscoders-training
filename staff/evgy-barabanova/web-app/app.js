require('dotenv').config();

const express = require('express')
const hbs = require('hbs')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes');

const { env: { PORT } } = process;

const app = express();

app.use(morgan('dev'))

app.get('/hello', (req, res) => res.send(`hello ${req.query.name}`))

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.urlencoded({ extended: true }))

app.use('/', userRoutes);
app.use('/', indexRoutes);

app.listen(PORT ?? 3100, () => console.log(`Server started ${PORT}`));
