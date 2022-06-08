require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { PORT } = process.env
const dbcheck = require('./db/dbConnection')

const app = express()
dbcheck()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan('dev'))

// requiring routes files
// const authRouter = require('./routes/authentication')
const userRoutes = require('./routes/userRoutes')

// middlewaries

// routes
app.use('/users', userRoutes)
app.use('/users/auth', userRoutes)

app.listen(PORT ?? 3003, () => {
  console.log('Server started at http://localhost:%s/', PORT)
})
