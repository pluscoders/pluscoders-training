const router = require('express').Router()
const { createNote, retrieveNotes, deleteNote, updateNote } = require('../logic')
const { env: { JWT_SECRET } } = process
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
  try {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    // const {
    //   text
    // } = req.body
    const { body: { text } } = req

    await createNote(userId, text)

    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.massage })
  }
})

router.get('/', async (req, res) => {
  try {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    const notes = await retrieveNotes(userId)

    res.status(201).json(notes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/:noteId', async (req, res) => {
  try {
    const { authorization } = req.headers

    const [, userId] = authorization.split(' ')

    const { noteId } = req.params

    await deleteNote(userId, noteId)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch('/:noteId', async (req, res) => {
  try {
    const { authorization } = req.headers

    const [, userId] = authorization.split(' ')

    const { noteId } = req.params
    const { text } = req.body

    await updateNote(userId, noteId, text)
    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
