const { User } = require('../db/models');

function retrieveUser(userId) {
  if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('userId is empty or blank')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })

    if (!user) throw new Error(`user with id ${userId} not found`)

    user.id = user.id.toString()

    delete user.password

    return user
  })()
}

module.exports = retrieveUser;
