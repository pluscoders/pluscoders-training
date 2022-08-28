const { Op } = require('sequelize')
const { Note, User } = require('../db/models');

function searchNotes(userId, query) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('userId is empty or blank')

  else if (typeof query !== 'string')
    throw new Error('text is not a string')

  else if (query.trim().length === 0)
    throw new Error('userId is empty or blank')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const notes = await Note.findAll({ where: { user_id: userId, text: { [Op.like]: `%${query}%` } } })

    return notes
  })();
}

module.exports = searchNotes;
