const { User } = require('../db/models')

function updateUserEmail(userId, email) {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (typeof email !== 'string')
    throw new Error('email is not a string')

  else if (email.trim().length === 0)
    throw new Error('email is empty or blank')

  else if (!EMAIL_REGEXP.test(email))
    throw new Error('email is not a valid email')

  else if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('userId is empty or blank')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const userUpdate = await User.update({ email },

      { where: { id: userId }, raw: true }
    )
    if (!userUpdate) throw new Error(`failed to change ${userId} new email`)
  })();
}

module.exports = updateUserEmail;
