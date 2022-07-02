const { Note, User } = require('../db/models');

function retrieveNotes(userId) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })

    if (!user) throw new Error(`user with id ${userId} not found`)

    let notes = await Note.findAll({})

    notes = notes.map(note => ({
      id: note.id.toString(),
      user_id: note.user_id.toString(),
      text: note.text,
      date: note.date
    }))

    return notes
  })();
}

module.exports = retrieveNotes;
