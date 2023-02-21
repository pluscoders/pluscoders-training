const { Note, User } = require('../db/models');

function createNote(userId, text) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (typeof text !== 'string')
    throw new Error('text is not a string')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })

    if (!user) throw new Error(`user with id ${userId} not found`)

    await Note.create({ user_id: Number(userId), text, date: new Date() })
  })();
}

module.exports = createNote;
