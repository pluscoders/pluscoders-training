const bcrypt = require('bcryptjs')

const { User } = require('../db/models')

function updateUserPassword(userId, oldPassword, newPassword) {
  if (typeof oldPassword !== 'string')
    throw new Error('old password is not a string')

  else if (oldPassword.trim().length === 0)
    throw new Error('old password is empty or blank')

  else if (typeof newPassword !== 'string')
    throw new Error('old password is not a string')

  else if (newPassword.trim().length === 0)
    throw new Error('old password is empty or blank')

  else if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('old password is empty or blank')

  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })
    if (!user) throw new Error(`user with id ${userId} not found`)

    const match = await bcrypt.compare(oldPassword, user.password)
    if (!match) throw new Error('wrong credentials')

    const passwordHash = await bcrypt.hash(newPassword, 10)

    const userUpdate = await User.update({ password: passwordHash },

      { where: { id: userId }, raw: true }
    )
    if (!userUpdate) throw new Error(`failed to change ${userId} new password`)
  })();
}

module.exports = updateUserPassword;
