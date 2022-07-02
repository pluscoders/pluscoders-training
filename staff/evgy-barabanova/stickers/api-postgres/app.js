require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { PORT } = process.env
const dbcheck = require('./db/dbConnection')

const app = express()

dbcheck()

app.use(express.json())

app.use(morgan('dev'))

// requiring routes files
// const authRouter = require('./routes/authentication')
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')

// middlewaries

// routes
app.use('/users', userRoutes)
app.use('/notes', noteRoutes)

app.listen(PORT ?? 3003, () => {
  console.log('Server started')
})
