const { Note, User } = require('../db/models');

function updateNote(userId, noteId, text) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (typeof noteId !== 'string')
    throw new Error('noteId is not a string')

  else if (typeof text !== 'string')
    throw new Error('text is not a string')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const note = await Note.update({ text }, { where: { id: noteId }, raw: true })
    if (!note) throw new Error(`note with id ${noteId} not found`)
  })();
}

module.exports = updateNote;
