const router = require('express').Router()
const { registerUser, authenticateUser, retrieveUser } = require('../logic')
//const JWT_SECRET = process.env.JWT_SECRET
const { env: { JWT_SECRET } } = process
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body

    await registerUser(name, email, password)

    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message('Failed to register') })
  }
})

router.post('/auth', async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body

    const userId = await authenticateUser(email, password)

    const payload = {
      sub: userId
    }

    const token = jwt.sign(payload, JWT_SECRET)

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message('Failed to login') })
  }
})

router.get('/', async (req, res) => {
  try {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    const user = await retrieveUser(userId)

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message('Users were not received') })
  }
})

module.exports = router
