const { User } = require('../db/models')

function updateUserName(userId, name) {
  if (typeof name !== 'string')
    throw new Error('old name is not a string')

  else if (name.trim().length === 0)
    throw new Error('old name is empty or blank')

  else if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('userId is empty or blank')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const userUpdate = await User.update({ name },

      { where: { id: userId }, raw: true }
    )
    if (!userUpdate) throw new Error(`failed to change ${userId} new name`)
  })();
}

module.exports = updateUserName;
