const router = require('express').Router()
const { registerUser, authenticateUser, retrieveUser, updateUserPassword, updateUserName, updateUserEmail } = require('../logic')
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
    res.status(500).json({ error: error.message })
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
    res.status(500).json({ error: error.message })
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
    res.status(500).json({ error: error.message })
  }
})

router.patch('/password', async (req, res) => {
  try {
    const { headers: { authorization }, body: { oldPassword, newPassword } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    await updateUserPassword(userId, oldPassword, newPassword)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch('/name', async (req, res) => {
  try {
    const { headers: { authorization }, body: { name } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    await updateUserName(userId, name)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch('/email', async (req, res) => {
  try {
    const { headers: { authorization }, body: { email } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    await updateUserEmail(userId, email)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
