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

    const { body: { text } } = req

    await createNote(userId, text)

    res.status(201).send('Note created')
  } catch (error) {
    res.status(500).json({ error: error.message('Note was not created') })
  }
})

router.get('/', async (req, res) => {
  try {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    const notes = await retrieveNotes(userId)

    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({ error: error.message('Notes could not be retrieved') })
  }
})

router.delete('/:noteId', async (req, res) => {
  try {
    const { headers: { authorization }, params: { noteId } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    await deleteNote(userId, noteId)
    res.status(204).send('Note deleted')
  } catch (error) {
    res.status(500).json({ error: error.message('Note could not be deleted') })
  }
})

router.patch('/:noteId', async (req, res) => {
  try {
    const { headers: { authorization }, params: { noteId }, body: { text } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, JWT_SECRET)

    const { sub: userId } = payload

    await updateNote(userId, noteId, text)
    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message('Note could not be updated') })
  }
})

module.exports = router
