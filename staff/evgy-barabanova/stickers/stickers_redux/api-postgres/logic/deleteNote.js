const { Note, User } = require('../db/models');

function deleteNote(userId, noteId) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (typeof noteId !== 'string')
    throw new Error('noteId is not a string')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const result = await Note.destroy({ where: { id: noteId } })
    if (!result) throw new Error(`note with id ${noteId} not found`)
  })();
}

module.exports = deleteNote;
